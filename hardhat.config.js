require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
// require("@openzeppelin/contracts");
require("@nomicfoundation/hardhat-verify");

// require("@nomiclabs/hardhat-etherscan");
// require("hardhat-verify");


const{_RPC_URL,PRIVATE_KEY,ETHERSCAN_API_KEY} = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
  holesky: {
    url: _RPC_URL,
    accounts: [`0x${PRIVATE_KEY}`],
   },
  },
  sourcify:{
    enabled: true
  },
  etherscan:{
    apiKey: {
      holesky: ETHERSCAN_API_KEY
    }
  }

};
