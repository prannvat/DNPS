// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashToXRPL {
    // Event emitted when a hash key is received
    event HashKeySubmitted(bytes32 indexed hashKey);

    // Function to accept the hash key
    function submitHashKey(bytes32 hashKey) public {
        emit HashKeySubmitted(hashKey);
    }
}