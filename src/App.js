import './App.scss';
import NavBar from "./components/NavBar.jsx"
import Index from "./pages/Index.jsx"
import Pokemons from "./pages/Pokemons.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokemonDetail from './pages/PokemonDetail';
function App() {




  return (
  <div className="App">
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/home" element={<Index/>}/>
        <Route path="/Pokedex-Pokemon-API" element={<Pokemons/>}/>
        <Route path="/Pokedex-Pokemon-API/:pokeType" element={<Pokemons/>}/>
        <Route path="/pokemon/:pokeId" element={<PokemonDetail/>}/>
      </Routes>
      
     
    
    </BrowserRouter>
    </div>
  );
}

export default App;
