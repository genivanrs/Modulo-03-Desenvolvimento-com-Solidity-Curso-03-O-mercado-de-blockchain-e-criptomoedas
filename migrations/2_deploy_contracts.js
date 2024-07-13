const PokeDIO = artifacts.require("PokeDIO");

module.exports = function(deployer) {
  deployer.deploy(PokeDIO);
};
