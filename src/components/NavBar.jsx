import {MdOutlineCatchingPokemon} from 'react-icons/md'
import {SiPokemon} from 'react-icons/si'
import {Link} from "react-router-dom"

const NavBar = () =>{

    return (
        <section className='navBar'>
            <div className='navLeft'>
                <Link to="/Pokedex-Pokemon-API"><div className='navLogo'><MdOutlineCatchingPokemon/>HOME</div></Link>
            </div>
            <div className='navRight'>
                 <Link to="/pokemons"><div className='navLinks'>POKEDEX</div></Link>
            </div>
            
               
             
            
        </section>
    )

}

export default NavBar