# Node.js Web3 Example

This is a Node.js script that demonstrates the usage of the Web3 library to interact with the Ethereum blockchain.

## Prerequisites

- Node.js installed on your machine
- An Ethereum node running locally or accessible via HTTP

## Setup

1. Clone this repository or create a new Node.js project.
2. Install the required dependencies by running the following command:

`npm install web3`

3. Update the code snippet in your JavaScript file with the appropriate addresses and values for your use case.

## Usage

1. Run the JavaScript file using Node.js:

`node index.js`

Replace `your_script.js` with the name of the file containing the code.

2. The script will output the balance of the specified Ethereum address in both Wei and Ether.

3. It will then initiate a transaction, sending 5 Ether from one address to another. The transaction receipt will be logged to the console.

## Notes

- Make sure to update the `HttpProvider` URL (`HTTP://127.0.0.1:7545`) with the correct URL of your Ethereum node.
- Ensure that the sending address (`from`) has sufficient funds to send the specified amount of Ether (`value`).

Feel free to modify and customize the code and instructions based on your specific needs.
