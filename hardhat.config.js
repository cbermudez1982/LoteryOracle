
require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");
require("dotenv").config();

const INFURA_NODE = process.env.INFURA_NODE;
const SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHSCAN_KEY;

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: INFURA_NODE,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};