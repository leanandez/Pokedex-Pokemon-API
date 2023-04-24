import { useNavigate } from "react-router-dom"



function Cards({ pokemon, color, loading, min, max }) {
    const navigate = useNavigate()
    const arrayColor = [...color]

    function cardColor(pokemonName) {
        let pokemonColor = ""
        arrayColor.forEach(color => color.pokemon_species.forEach(
            pokemon => (pokemon.name === pokemonName) ? pokemonColor = color.name : null
        ))
        return pokemonColor
    }
    

    return (
        <div className="cards" style={{}}>
            {loading ? <h1>LOADING...</h1> :
                pokemon.slice(min, max).map((item) => {
                    return (
                        <div className="card" key={item.id} onClick={()=> navigate(`/pokemon/${item.id}`)} style={{background: `linear-gradient(${cardColor(item.name)}, black 99%)`}}>
                            <img src={item.sprites.other["official-artwork"].front_default} alt=""></img>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Cards