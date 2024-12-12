//SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./ERC20Implementation.sol";

contract ERC20Factory {
    address public implementation;

    event TokenCreated(address indexed tokenAddress, string name , string symbol, uint256 initialSupply);

    constructor(address _implementation){
        implementation = _implementation;
    }

    function createToken(
        string memory name, 
        string memory symbol,
        uint256 initialSupply
    ) external returns(address) {
        address clone = Clones.clone(implementation);
        ERC20Implementation(clone).initialize(name,symbol,initialSupply,msg.sender);        emit TokenCreated(clone, name, symbol, initialSupply);
        return clone;
    }
}