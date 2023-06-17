const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

const contract = new web3.eth.Contract(
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_number",
          type: "uint256",
        },
      ],
      name: "setNumber",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_A",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_B",
          type: "uint256",
        },
      ],
      name: "getAddition",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "getNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "number",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  "0x60010f283a090dE872908BBd0C6929157b37C268"
);

const getBalance = () => {
  web3.eth
    .getBalance("0x3F57fEBeeB9D01520C5E3F76807b4b48Ef3e6D89")
    .then(function (balance) {
      console.log("Balance in Wei is ", balance);
      console.log("Balance in Eth is ", web3.utils.fromWei(balance, "ether"));
    });
};

const triggerTransaction = async () => {
  await web3.eth
    .sendTransaction({
      from: "0x3F57fEBeeB9D01520C5E3F76807b4b48Ef3e6D89",
      to: "0x4DaFA37B0A5c03f6Ab630F89C974F5F4Ce6245fC",
      value: web3.utils.toWei("15", "ether"),
    })
    .then(function (receipt) {
      console.log(receipt);
    });
};

const getBalanceOfReceiver = () => {
  web3.eth
    .getBalance("0x4DaFA37B0A5c03f6Ab630F89C974F5F4Ce6245fC")
    .then(function (balance) {
      console.log("Balance of receiver in Wei is ", balance);
      console.log(
        "Balance of receiver in Eth is ",
        web3.utils.fromWei(balance, "ether")
      );
    });
};

const main = async () => {
  getBalance();
  getBalanceOfReceiver();
  await triggerTransaction();
  getBalance();
  getBalanceOfReceiver();
};

const setNumber = async (number) => {
  await contract.methods
    .setNumber(number)
    .send({ from: "0x8cA8Ac008b5882f389E8943C23dD7C8FF6ceadE6" });
};

const getNumber = async () => {
  contract.methods.number().call().then(console.log);
};

const getAddition = () => {
  contract.methods.getAddition(10, 9).call().then(console.log);
};

const numberMainFunction = async () => {
  getNumber();
  await setNumber(28);
  getNumber();
};

// main();
getAddition();

numberMainFunction();
