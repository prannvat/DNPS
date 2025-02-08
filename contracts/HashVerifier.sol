// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStateConnector {
    // Function to request proof of data from an external blockchain
    function requestAttestation(bytes calldata attestationData) external returns (bytes32 queryId);

    // Event emitted when an attestation is requested (may vary in actual implementation)
    event AttestationRequested(bytes32 indexed queryId, bytes attestationData);
}

contract HashVerifier {
    IStateConnector public stateConnector;

    // Off-chain hash from the database
    bytes32 public offChainHash;

    // Verification flag
    bool public verified;

    // Mapping to store query IDs to prevent replay attacks
    mapping(bytes32 => bool) public processedQueries;

    // Address of contract owner
    address public owner;

    // Event emitted when verification is successful
    event VerificationSuccessful(bytes32 indexed queryId);

    // Modifier to restrict functions to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address _stateConnectorAddress, bytes32 _offChainHash) {
        stateConnector = IStateConnector(_stateConnectorAddress);
        offChainHash = _offChainHash;
        owner = msg.sender;
        verified = false;
    }

    // Function to update the off-chain hash (only owner)
    function updateOffChainHash(bytes32 _newHash) external onlyOwner {
        offChainHash = _newHash;
        verified = false; // Reset verification status
    }

    // Function to request the hash from XRPL
    function requestHashFromXRPL(bytes memory xrplTransactionData) external onlyOwner returns (bytes32) {
        // Request proof from the State Connector
        bytes32 queryId = stateConnector.requestAttestation(xrplTransactionData);

        // Mark the query as pending
        processedQueries[queryId] = false;

        return queryId;
    }

    // Callback function to receive data from the State Connector
    // In reality, this might be handled via an event listening mechanism off-chain
    function receiveHashFromXRPL(bytes32 queryId, bytes32 xrplHash) external {
        // Verify that the caller is the State Connector
        require(msg.sender == address(stateConnector), "Caller is not the State Connector");

        // Check if the query has already been processed
        require(!processedQueries[queryId], "Query already processed");

        // Compare hashes
        if (xrplHash == offChainHash) {
            verified = true;
            emit VerificationSuccessful(queryId);
        }

        // Mark the query as processed
        processedQueries[queryId] = true;
    }
}