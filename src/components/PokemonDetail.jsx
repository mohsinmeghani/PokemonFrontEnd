import React,{ useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'

const PokemonDetail = () => {

  const navigate = useNavigate()
  let { id } = useParams();

  const typeRedirect = () => {
    navigate('/pokemontype/1/fire')
  }

   const [pokemonDetails, setPokemonDetails] = useState();

  const getApiData = ()=>{
    fetch('http://pokemon.local/api/pokemon/get/'+id)
    .then((response)=>response.json())
    .then((json) => {
      console.log('$$$json', json);
      setPokemonDetails(json)
    })
  }


  useEffect(() => {
    // GetData();
    getApiData()
  }, []);

  

  return (
    pokemonDetails &&
    <div>
      <h1>{pokemonDetails.name}</h1>
      <div className="detail-container">
        <div className="pokemon-img">
          <img
            width="350px"
            //https://static.posters.cz/image/1300/poster/pokemon-pikachu-neon-i71936.jpg
            src={pokemonDetails.imageUrl}
          ></img>
        </div>

        <div className="pokemon-detail">
          <div className="desc">
            <p>
            Pikachu are mammal-like creatures that have short, yellow fur with
                  brown stripes on their backs, black-tipped ears, and an unusually
                  shaped tail, resembling a lightning bolt.
            </p>
          </div>

          <div className="stats">
            <div className="left">
              <div className="c-color">Base Experience</div>
              <div className="c-font">{pokemonDetails.base_experience}</div>
              <div className="c-color">weight</div>
              <div className="c-font">{pokemonDetails.weight}kg</div>
              <div className="c-color">Height</div>
              <div className="c-font">{pokemonDetails.height}Ft</div>
            </div>
            <div className="right">
              <div className="c-color">category</div>
              <div className="c-font">flame</div>
              <div className="c-color">capabilities </div>
              <div className="c-font">major fire</div>
            </div>
          </div>
          <div className="info">
            <div>
              <div className="c-font2">Type</div>
              {pokemonDetails.types.map(item =>
                <div className="c-radius c-color" onClick={typeRedirect}>{item.name}</div>

                )}
              
              
            </div>
            <div>
              <div className="c-font2">Weakness</div>
              <div className="c-radius3 c-color">water</div>
              <div className="c-radius4 c-color">eletric</div>
              <div className="c-radius5 c-color">rock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
