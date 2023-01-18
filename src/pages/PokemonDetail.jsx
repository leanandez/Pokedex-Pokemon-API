import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import StatsBar from "../components/StatsBar"
import NavBar from "../components/NavBar"
import SearchType from "../components/SearchType"

const PokemonDetail = () => {
    const navigate = useNavigate()

    const { pokeId } = useParams()
    const [pokeUrl, setPokeUrl] = useState(`${pokeId}`)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemon, setPokemon] = useState({})
    const [pokemonType, setPokemonType] = useState("")

    const [prevPoke, setPrevPoke] = useState()
    const [nextPoke, setNextPoke] = useState()




    const searchPokemon = async () => {
        setLoading(true)

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeUrl}/`).then(data => data.json(), setError(false)).catch(error => setError(true));

        setPokemon(res)
        setPokemonType(res.types[0].type.name)
        setPrevPoke(res.id - 1)
        setNextPoke(res.id + 1)
        setLoading(false)
        console.log(res)

    }

    useEffect(() => {
        searchPokemon()

    }, [pokeId, pokeUrl])






    //Search Bar
    const [input, setInput] = useState("")
    const handleChange = (e) => {
        e.preventDefault();
        setInput((e.target.value).toLowerCase());
    }


    return (
        <div className="pokemonDetailContainer">
            <NavBar />

            <div className="pokemonsSearch">
                <div className="searchPokemon">
                    <input type="text" value={input} placeholder="NAME OR ID" onChange={handleChange}></input>
                <button type="submit" onClick={() => { setPokeUrl(input) }}>SEARCH POKEMON</button>
                </div>
                <SearchType />
            </div>


            <div className="pokemonDetail">
                {error ? <h1>Pokemon not found</h1> :
                    <>
                        {loading ? <h1>Loading...</h1> :
                            <>
                                <div className="pokemonDetailTop">
                                    <div className="detailPicture">
                                        {pokemon.sprites.other["official-artwork"].front_default ?
                                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt=""></img> :
                                            <p>This pokemon was never photographed</p>

                                        }
                                    </div>

                                    <div className="detailTitle">
                                        <div className="detailTitleTop" style={{ backgroundImage: `url(/types/${pokemonType}.png)`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                                            <div className="detailType"></div>
                                            <div>
                                                <h3>{pokemon.types[0].type.name}</h3>
                                                <h1>{pokemon.name}</h1>
                                            </div>
                                        </div>

                                        <div className="detailSubtitle">
                                            <div className="detalSubtitlesLeft">
                                                <p>Height</p>
                                                <p>Weight</p>
                                                <p>Abilities</p>
                                            </div>
                                            <div className="detailSubtitlesRight">
                                                <p>{pokemon.height}M</p>
                                                <p>{pokemon.weight}KG</p>
                                                <p>{(pokemon.abilities = ![]) ? (pokemon.abilities[0].ability.name) : "None"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pokemonDetailBottom">
                                    <div className="detailStats">
                                        <div className="stats">
                                            <div>
                                                <p>HP</p>
                                                <StatsBar qty={pokemon.stats[0].base_stat} />
                                                <p>{pokemon.stats[0].base_stat}</p>
                                            </div>

                                            <div>
                                                <p>Attack</p>
                                                <StatsBar qty={pokemon.stats[1].base_stat} />
                                                <p>{pokemon.stats[1].base_stat}</p>
                                            </div>
                                            <div>
                                                <p>Defense</p>
                                                <StatsBar qty={pokemon.stats[2].base_stat} />
                                                <p>{pokemon.stats[2].base_stat}</p>
                                            </div>
                                            <div>
                                                <p>Special-attack</p>
                                                <StatsBar qty={pokemon.stats[3].base_stat} />
                                                <p>{pokemon.stats[3].base_stat}</p>
                                            </div>
                                            <div>
                                                <p>Special-defense</p>
                                                <StatsBar qty={pokemon.stats[4].base_stat} />
                                                <p>{pokemon.stats[4].base_stat}</p>
                                            </div>
                                            <div>
                                                <p>Speed</p>
                                                <StatsBar qty={pokemon.stats[5].base_stat} />
                                                <p>{pokemon.stats[5].base_stat}</p>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                                <div className="pokemonDetailBtn">
                                    <button onClick={() => { setPokeUrl(prevPoke) }}><div className="detailPrev"></div></button>
                                    <button onClick={() => { setPokeUrl(nextPoke) }}><div className="detailNext"></div></button>
                                </div>
                            </>
                        }
                    </>
                }


            </div>

        </div>


    )



}

export default PokemonDetail