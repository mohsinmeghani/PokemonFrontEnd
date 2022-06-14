import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PokemonCard from './components/PokemonCard';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import PokemonType from './components/PokemonType';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/pokemons" element={<PokemonCard />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/pokemontype/:id/:type" element={<PokemonType />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
