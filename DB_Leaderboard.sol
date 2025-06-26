// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OmegaLeaderboard {
    struct Entry {
        uint256 omega;
        uint256 arcade;
        uint256 txCount;
        uint256 lastUpdated;
    }

    mapping(address => Entry) public entries;
    address[] public submitters;

    event ScoreSubmitted(address indexed user, uint256 omega, uint256 arcade, uint256 txCount);

    function submitScore(uint256 omega, uint256 arcade, uint256 txCount) external {
        if (entries[msg.sender].lastUpdated == 0) {
            submitters.push(msg.sender);
        }
        entries[msg.sender] = Entry(omega, arcade, txCount, block.timestamp);
        emit ScoreSubmitted(msg.sender, omega, arcade, txCount);
    }

    function getSubmitters() external view returns (address[] memory) {
        return submitters;
    }

    function getEntry(address user) external view returns (Entry memory) {
        return entries[user];
    }
}
