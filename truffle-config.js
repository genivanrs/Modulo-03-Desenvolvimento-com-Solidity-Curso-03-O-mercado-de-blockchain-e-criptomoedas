module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545, // porta padrão do Ganache
        network_id: "*", // qualquer id de rede
      },
    },
    compilers: {
      solc: {
        version: "0.8.0", // versão do Solidity
      },
    },
  };
  