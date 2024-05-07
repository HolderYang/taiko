// require("@nomicfoundation/hardhat-toolbox");
//
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };

// 更新配置
require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    taiko: {
      url: process.env.RPC_URL,
      accounts: [process.env.YOUR_PRIVATE_KEY],
    }
  }
};