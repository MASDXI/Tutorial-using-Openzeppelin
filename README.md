# Tutorial-using-Openzeppelin
Tutorial using Openzeppelin for complie, deploy and automated unit tests Solidity.

To run these tutorials, you must have the following installed:

```
$ npm install
```

for complile your smartcontract to get an abi and artifact of smartcontract for unit test using command.

```
$ oz complie
```

for unit testing smartcontract using command.

```
$ npm run unit-test
```
expecting `unit-test` result 
```
> tutorial-openzeppelin@1.0.0 unit-test C:\Users\tutorial-openzeppelin
> mocha --exit --recursive test

  Automated Smart Contract Tests
    √ [SCENARIO]:: returns a zero value (119ms)
    √ [SCENARIO]:: returns a value after increase (328ms)
    √ [SCENARIO]:: returns a value value after increase 2 times (376ms)
    √ [SCENARIO]:: returns a value after set value (224ms)
    
  4 passing (3s)
```

after testing if you want to deploy contract using command.

```
$ oz deploy
Nothing to compile, all contracts are up to date.
? Choose the kind of deployment regular
? Pick a network development
? Pick a contract to deploy Counter
✓ Deployed instance of Counter
0x6B63A34f46e2b7C5Ba6Be52e32bcb846DE20416E
```
your can edit deploy network endpoint at `network.js`.

```javascript
module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 20000000000, //The price of gas in wei (defaults to 20000000000)
      networkId: '*',
    }
  },
};
```
