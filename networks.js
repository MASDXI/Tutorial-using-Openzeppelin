module.exports = {
  networks: {
    gancahe_cli: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 20000000000, //The price of gas in wei (defaults to 20000000000)
      networkId: '*',
    },
    ganache_gui: {
      protocol: 'http',
      host: 'localhost',
      port: 7545,
      gas: 5000000,
      gasPrice: 0,
      networkId: '*',
    }
  },
};
