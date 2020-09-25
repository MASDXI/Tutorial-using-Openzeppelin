// Load dependencies
const { accounts, contract } = require("@openzeppelin/test-environment");
const { expect } = require("chai");

// Load compiled artifacts
const Counter = contract.fromArtifact("counter");

// Start test block
describe("Automated Smart Contract Tests", function() {
  const [owner] = accounts;

  beforeEach(async function() {
    // Deploy a new Counter contract for each test
    this.contract = await Counter.new({ from: owner });
  });

  // Test case
  it("[SCENARIO]:: returns a zero value", async function() {
    // Test if the returned value is 0
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.contract.retrieve()).toString()).to.equal("0");
  });

  it("[SCENARIO]:: returns a value after increase", async function() {
    // increase value
    await this.contract.increase({ from: owner });
    // Test if the returned value is 1
    expect((await this.contract.retrieve()).toString()).to.equal("1");
  });

  it("[SCENARIO]:: returns a value value after increase 2 times", async function() {
    // increase value 2 times
    await this.contract.increase({ from: owner });
    await this.contract.increase({ from: owner });
    // Test if the returned value is 2
    expect((await this.contract.retrieve()).toString()).to.equal("2");
  });

  it("[SCENARIO]:: returns a value value after increase 2 times", async function() {
    // increase value 2 times
    await this.contract.increase({ from: owner });
    await this.contract.increase({ from: owner });
    // Test if the returned value is 2
    expect((await this.contract.retrieve()).toString()).to.equal("2");
  });

  it("[SCENARIO]:: returns a value after set value", async function() {
    // increase value
    await this.contract.setValue(1337,{ from: owner });
    // Test if the returned value is 1
    expect((await this.contract.retrieve()).toString()).to.equal("1337");
  });
});
