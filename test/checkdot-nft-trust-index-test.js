const truffleAssert = require('truffle-assertions');
const contractTruffle = require('truffle-contract');
const { toWei, toBN } = web3.utils;

/* CheckDotNftTrustIndexContract Artifact */
const CheckDotNftTrustIndexContract = artifacts.require('CheckDotNftTrustIndex');

contract('CheckDotNftTrustIndexContract', async (accounts) => {
  let checkDotNftTrustIndexContractInstance;

  let owner;
  let initiator;
  let validatorOne;
  let validatorTwo;
  let validatorThree;
  let validatorFour;

  before(async () => {
    // instances
    checkDotNftTrustIndexContractInstance = await CheckDotNftTrustIndexContract.deployed();

    console.log('Contract address:', checkDotNftTrustIndexContractInstance.address);

    // accounts
    owner = accounts[0];
    initiator = accounts[1];
    validatorOne = accounts[2];
    validatorTwo = accounts[3];
    validatorThree = accounts[4];
    validatorFour = accounts[5];
  });

  it('Add NFT', async () => {
    await checkDotNftTrustIndexContractInstance.mint(owner, "bafyreihtmolklc7chhbt5gjupytijohas55ymizciun6lhgipmefbsdhbm/metadata.json",
    {
      from: owner,
    });

    // checkDotNftTrustIndexContractInstance.tokenURI();

  });
});