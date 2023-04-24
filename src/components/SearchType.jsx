import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"

function SearchType() {

    const navigate = useNavigate()
    const [typeValue, setTypeValue] = useState("")


    const handleTypeChange = (e) => {
        setTypeValue(e.target.value)
        switch (e.target.value) {
            case "grass":
                navigate(`../Pokedex-Pokemon-API/grass`)
                break;
            case "normal":
                navigate("../Pokedex-Pokemon-API/normal")
                break;
            case "fire":
                navigate("../Pokedex-Pokemon-API/fire")
                break;
            case "water":
                navigate("../Pokedex-Pokemon-API/water")
                break;
            case "flying":
                navigate("../Pokedex-Pokemon-API/flying")
                break;
            case "fighting":
                navigate("../Pokedex-Pokemon-API/fighting")
                break;
            case "poison":
                navigate("../Pokedex-Pokemon-API/poison")
                break;
            case "electric":
                navigate("../Pokedex-Pokemon-API/electric")
                break;
            case "ground":
                navigate("../Pokedex-Pokemon-API/ground")
                break;
            case "rock":
                navigate("../Pokedex-Pokemon-API/rock")
                break;
            case "psychic":
                navigate("../Pokedex-Pokemon-API/psychic")
                break;
            case "ice":
                navigate("../Pokedex-Pokemon-API/ice")
                break;
            case "grass":
                navigate("../Pokedex-Pokemon-API/grass")
                break;
            case "bug":
                navigate("../Pokedex-Pokemon-API/bug")
                break;
            case "ghost":
                navigate("../Pokedex-Pokemon-API/ghost")
                break;
            case "steel":
                navigate("../Pokedex-Pokemon-API/steel")
                break;
            case "dragon":
                navigate("../Pokedex-Pokemon-API/dragon")
                break;
            case "dark":
                navigate("../Pokedex-Pokemon-API/dark")
                break;
            case "fairy":
                navigate("../Pokedex-Pokemon-API/fairy")
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