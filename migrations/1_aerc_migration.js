const AERC = artifacts.require("AERC");

module.exports = function (deployer) {
  deployer.deploy(AERC, 1000000);
};
