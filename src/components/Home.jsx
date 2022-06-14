import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import axios from 'axios'
import { compose } from "@mui/system";

const Home = () => {

  const [pokemons, setPokemons] = useState();
  console.log('pokemons', pokemons);


  const getApiData = ()=>{
    fetch('http://pokemon.local/api/pokemon')
    .then((response)=>response.json())
    .then((json) => {
      console.log('$$$json', json);
      setPokemons(json)
    })
  }

  useEffect(() => {
    // GetData();
    getApiData()
  }, []);


  console.log(pokemons)
  return (
    <>
    {pokemons && (<div>
      <h1>Search</h1>
      <PokemonCard pokemons={pokemons} /> 
    </div>)}
    </>
  );
};



export default Home;
