const PokeDIO = artifacts.require("PokeDIO");

contract("PokeDIO", accounts => {
  it("should create a new Pokemon", async () => {
    const instance = await PokeDIO.deployed();
    await instance.createNewPokemon("Pikachu", accounts[0], "https://img.url/pikachu.png");
    const pokemon = await instance.getPokemon(0);
    assert.equal(pokemon.name, "Pikachu");
  });

  it("should allow the owner to battle", async () => {
    const instance = await PokeDIO.deployed();
    await instance.createNewPokemon("Charmander", accounts[1], "https://img.url/charmander.png");
    await instance.createNewPokemon("Bulbasaur", accounts[1], "https://img.url/bulbasaur.png");

    await instance.battle(1, 2, { from: accounts[1] });

    const attacker = await instance.getPokemon(1);
    const defender = await instance.getPokemon(2);

    assert.equal(attacker.level, 3);
    assert.equal(defender.level, 2);
  });
});
