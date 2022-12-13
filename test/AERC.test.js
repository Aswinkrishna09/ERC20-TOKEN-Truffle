const AERC = artifacts.require("AERC");

contract("AERC", (accounts) => {
  //console.log(accounts)
  let aerc;
  before(async () => {
    aerc = await AERC.deployed();
  });

  it("Gives the owner of the token 1M tokens", async () => {
    let balance = await aerc.balanceOf(accounts[0]);
    console.log(balance);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(
      balance,
      1000000,
      "Balance should be 1M tokens for contract creator"
    );
  });

  it("can transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("1000", "ether");
    await aerc.transfer(accounts[1], amount, { from: accounts[0] });

    let balance = await aerc.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(balance,1000,"Balance should be 1k tokens for contract creator")

  });
});
