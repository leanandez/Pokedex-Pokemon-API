import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"

function SearchType() {

    const navigate = useNavigate()
    const [typeValue, setTypeValue] = useState("")


    const handleTypeChange = (e) => {
        setTypeValue(e.target.value)
        switch (e.target.value) {
            case "grass":
                navigate(`../pokemons/grass`)
                break;
            case "normal":
                navigate("../pokemons/normal")
                break;
            case "fire":
                navigate("../pokemons/fire")
                break;
            case "water":
                navigate("../pokemons/water")
                break;
            case "flying":
                navigate("../pokemons/flying")
                break;
            case "fighting":
                navigate("../pokemons/fighting")
                break;
            case "poison":
                navigate("../pokemons/poison")
                break;
            case "electric":
                navigate("../pokemons/electric")
                break;
            case "ground":
                navigate("../pokemons/ground")
                break;
            case "rock":
                navigate("../pokemons/rock")
                break;
            case "psychic":
                navigate("../pokemons/psychic")
                break;
            case "ice":
                navigate("../pokemons/ice")
                break;
            case "grass":
                navigate("../pokemons/grass")
                break;
            case "bug":
                navigate("../pokemons/bug")
                break;
            case "ghost":
                navigate("../pokemons/ghost")
                break;
            case "steel":
                navigate("../pokemons/steel")
                break;
            case "dragon":
                navigate("../pokemons/dragon")
                break;
            case "dark":
                navigate("../pokemons/dark")
                break;
            case "fairy":
                navigate("../pokemons/fairy")
                break;
            default:

                break;
        }
    }

    return (
        <>
            <div className="searchType">
        
                <select value={typeValue} onChange={handleTypeChange}>
                    <option value="option1">CHOOSE TYPE</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="flying">Flying</option>
                    <option value="fighting">Fighting</option>
                    <option value="poison">Poison</option>
                    <option value="electric">Electric</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                </select>
 <div>
                    <p>SEARCH TYPE</p>
                </div>
            </div>
           
        </>
    )
}


export default SearchType