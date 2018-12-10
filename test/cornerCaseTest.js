const assert = require('chai').assert;
const RLP = require('../index.js');
const BN = require('bn.js');
const AionLong = RLP.AionLong;

describe("Describes corner cases that pop up", () => {
  it("should properly encode the following corner case", () => {
    const transferValue = "203261307462270040000000000";
    const gas = new BN(2000000)
    const gasPrice = new BN(10000000000);

    const txArray = new Array();
    
    txArray.push(new BN(0));
    txArray.push("0xA0e855B1173E17D87Bb63e33fdFF36E6494fD2CAC42bc7f80d0a093Ee29d263A");
    txArray.push(new BN(transferValue));
    txArray.push(null);
    txArray.push(null);
    txArray.push(new AionLong(gas));
    txArray.push(new AionLong(gasPrice));
    txArray.push(new BN(0x00));  
  });
});