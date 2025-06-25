// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./OmegaStakingPool.sol";

contract OmegaStakingPoolFactory {
    event PoolCreated(address indexed creator, address pool);

    address[] public allPools;

    function createPool(
        address stakingToken,
        uint256 rewardAPR,
        bool isLocked,
        uint256 lockDuration,
        uint256 minStake,
        uint256 maxStake
    ) external returns (address pool) {
        pool = address(
            new OmegaStakingPool(
                stakingToken,
                rewardAPR,
                isLocked,
                lockDuration,
                minStake,
                maxStake,
                msg.sender
            )
        );
        allPools.push(pool);
        emit PoolCreated(msg.sender, pool);
    }

    function getAllPools() external view returns (address[] memory) {
        return allPools;
    }
}
