const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

web3.eth
  .getBalance("0x71e36EA0Fc6437AcD94bAa4d85995E0EfAd1BA6B")
  .then(function (balance) {
    console.log("Balance in Wei is ", balance);
    console.log("Balance in Eth is ", web3.utils.fromWei(balance, "ether"));
  });

web3.eth
  .sendTransaction({
    from: "0x71e36EA0Fc6437AcD94bAa4d85995E0EfAd1BA6B",
    to: "0x0FfDdbc50efb4b2e62efeb1C5BEa40274D2Ef650",
    value: web3.utils.toWei("5", "ether"),
  })
  .then(function (receipt) {
    console.log(receipt);
  });
