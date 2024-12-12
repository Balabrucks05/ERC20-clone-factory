const {ethers} = require('hardhat');

async function main(){

    const name = "Rajini";
    const symbol = "RAJ";
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // Example: 1000000 tokens with 18 decimals
    const owner = await ethers.getSigner(); // Default account to deploy the token
    
    //Deploy the ERC20Implementation contract
    const ERC20Implementation = await ethers.getContractFactory("ERC20Implementation");
    const erc20Implementation = await ERC20Implementation.deploy(name, symbol,initialSupply);
    await erc20Implementation.deployed()

    console.log("ERC20 Implementation deployed to:", erc20Implementation.address);

    //Initialize the contract with the token details
    

    const initializeTx = await erc20Implementation.initialize(name,symbol,initialSupply,owner.address);
    await initializeTx.wait();

    console.log(`Token initialized with Name: ${name}, Symbol: ${symbol}`);


    //Deploy the ERC20Factory contract
    const ERC20Factory = await ethers.getContractFactory("ERC20Factory");
    const erc20Factory = await ERC20Factory.deploy(erc20Implementation.address);
    await erc20Factory.deployed();

    console.log("ERC20 Factory deployed to", erc20Factory.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
})