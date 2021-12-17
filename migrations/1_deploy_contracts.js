const CheckDotNftTrustIndexContract = artifacts.require("CheckDotNftTrustIndex");

module.exports = function(deployer) {
  deployer.deploy(CheckDotNftTrustIndexContract, "CheckDot", "CDTNFT", false);
};
