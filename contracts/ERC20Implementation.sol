//SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Implementation is ERC20{
    bool private initialized;

    string private _name;
    string private _symbol;
    uint256 private _initialSupply;

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_
    ) ERC20("RAJINI","RAJ"){}

    function initialize(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 initialSupply,
        address owner
    ) external {
        require(!initialized , "Already initialized");
        initialized = true;

        //set the tokens details dynamically
        _name = tokenName;
        _symbol = tokenSymbol;
        _initialSupply = initialSupply;

        //Mint the initial supply to the owner
        _mint(owner, initialSupply);
    }

    //override the name and the symbol functions to return dynamic values
    function name() public view override returns(string memory) {
        return _name;
    }
    function symbol() public view override returns(string memory) {
        return _symbol;
    }


    
}