// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashToXRPL {
    // Event emitted when a hash key is received
    event HashKeySubmitted(bytes32 indexed hashKey);

    // Mapping to store submitted hash keys
    mapping(bytes32 => bool) public storedHashes;

    // Function to accept the hash key
    function submitHashKey(bytes32 hashKey) public {
        // Store the hash key
        storedHashes[hashKey] = true;

        // Emit the event
        emit HashKeySubmitted(hashKey);
    }

    // Function to check if a hash key is stored
    function isHashStored(bytes32 hashKey) public view returns (bool) {
        return storedHashes[hashKey];
    }
}