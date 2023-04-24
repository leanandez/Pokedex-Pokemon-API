import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Cards from "../components/Cards"
import SearchType from "../components/SearchType"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import IntroModal from "../components/IntroModal"


function Pokemons() {
  const navigate = useNavigate()

  const { pokeType } = useParams()

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [error, setError] = useState(false)

  //Los siguientes dos estados son para que las CARDS me muestren de a 10 cuando los pokemones son buscados por TYPE
  const [initialTypes, setInitialTypes] = useState(0)
  const [finalTypes, setFinalTypes] = useState(10)

  const [colorData, setColorData] = useState([])
  const [colorUrl, setColorUrl] = useState("https://pokeapi.co/api/v2/pokemon-color/")




  //Función para hacer primer fetch de datos a la API
  const pokemonFunction = async (type) => {
    setLoading(true)

    if (type) {
      const res2 = await fetch(`https://pokeapi.co/api/v2/type/${type}/`).then(data => data.json())
      getPokemonByType(res2.pokemon)
      const colorRes = await fetch(colorUrl).then(data => data.json())
      getColor(colorRes.results)
      setLoading(false)
    } else {
      const res = await fetch(url).then(data => data.json());
      setNextUrl(res.next)
      setPrevUrl(res.previous)
      const colorRes = await fetch(colorUrl).then(data => data.json())
      getColor(colorRes.results)
      //console.log(res)
      getPokemon(res.results)
      setLoading(false)

    }
  }

  //Función para traer cada uno de los pokemons de la API
  const getPokemon = async (res) => {
    res.map(async (item) => {
      //console.log(item.url)
      const result = await fetch(item.url).then(data => data.json())
      setPokeData(state => {
        state = [...state, result]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state
      })
    })
  }

  //Funcion para traer pokemones por tipo
  const getPokemonByType = async (res) => {
    setPokeData([])
    res.map(async (poke) => {
      const result = await fetch(poke.pokemon.url).then(data => data.json())
      setPokeData(state => {
        state = [...state, result]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state
      })

    })
  }


  //Función para traer los grupos de colores de los pokemons
  const getColor = async (res) => {
    res.map(async (item) => {
      const result = await fetch(item.url).then(data => data.json())
      setColorData(state => {
        state = [...state, result]
        return state
      })
    })
    //console.log(colorData)
  }


  //Funciones para mostrar de a 10 los pokemones cuando se buscan por TYPE
  const handleIncrementTypes = () => {
    setInitialTypes(initialTypes + 10)
    setFinalTypes(finalTypes + 10)
    
  }
  const handleDecrementTypes = () => {
    setInitialTypes(initialTypes - 10)
    setFinalTypes(finalTypes - 10)
  }



  useEffect(() => {
    pokemonFunction(pokeType)
    //console.log(pokeData)
   console.log(url)   

  }, [url, pokeType, initialTypes, finalTypes])





  //Search Bar
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    e.preventDefault();
    setInput((e.target.value).toLowerCase());
  }




  return (
    <div className="pokemonsContainer">
      <NavBar/>
      <div className="pokemonsSearch">
        <div className="searchPokemon">
          <input type="text" value={input} placeholder="NAME OR ID" onChange={handleChange}></input>
        <button type="submit" onClick={() => { navigate(`/pokemon/${input}`) }}>SEARCH POKEMON</button>
        </div>
        <SearchType />
      </div>

      <div className="pokemonsCards">
        <Cards pokemon={pokeData} color={colorData} loading={loading} min={initialTypes} max={finalTypes} />
        <div className="pokemonsCardsBtn">
          <button onClick={() => {pokeType? handleDecrementTypes():setPokeData([]); setColorData([]); setUrl(prevUrl);  }} disabled={(initialTypes === 0 && pokeType !== undefined)||(url === "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10")}><div className="prevBtn"></div></button>
          <button onClick={() => {pokeType?handleIncrementTypes(): setPokeData([]); setColorData([]); setUrl(nextUrl);  }} disabled={finalTypes > pokeData.length}><div className="nextBtn"></div></button>
        </div>
      </div>




    </div>
  )
}

export default Pokemons