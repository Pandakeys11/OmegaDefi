// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./OmegaERC20.sol";

contract OmegaTokenFactory {
    event TokenCreated(address indexed creator, address token, string name, string symbol);

    address[] public allTokens;

    function createToken(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        uint256 initialSupply_,
        bool mintable_,
        bool pausable_
    ) external returns (address) {
        OmegaERC20 token = new OmegaERC20(
            name_,
            symbol_,
            decimals_,
            initialSupply_,
            msg.sender,
            mintable_,
            pausable_
        );
        allTokens.push(address(token));
        emit TokenCreated(msg.sender, address(token), name_, symbol_);
        return address(token);
    }

    function getAllTokens() external view returns (address[] memory) {
        return allTokens;
    }
}
