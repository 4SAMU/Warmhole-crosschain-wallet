// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // Retrieve the contract factory for CrossChainWallet
  const CrossChainWallet = await hre.ethers.getContractFactory(
    "CrossChainWallet"
  );
  console.log("Deploying CrossChainWallet...");

  // Deploy the contract
  const crossChainWallet = await CrossChainWallet.deploy();
  await crossChainWallet.deployed();
  console.log(`CrossChainWallet deployed to: ${crossChainWallet.address}`);
}

// Handle errors and exit process
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
