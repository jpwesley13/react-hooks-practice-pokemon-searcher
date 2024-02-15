import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/pokemon`)
    .then(res => res.json())
    .then(setPokemon)
  }, [])

  const pokemonToDisplay = pokemon.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))

  function onAddPokemon(newPokemon){
    return setPokemon([...pokemon, newPokemon]) //make sure to always remember the []!!
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      onAddPokemon={onAddPokemon}/>
      <br />
      <Search 
      search = {search}
      searchSetter={setSearch}/>
      <br />
      <PokemonCollection 
        pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
