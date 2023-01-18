import { useRef, useLayoutEffect, useState, useEffect } from "react"
import {ScrollContainer, ScrollPage, Animator, Fade} from "react-scroll-motion"
import Aos from "aos"
import "aos/dist/aos.css"


function IndexDivided(){
    const [bottomHeight, setBottomHeigth] = useState()
    const [animation, setAnimation] =useState(1)
    
    window.addEventListener("scroll", change)
 
    const currentScroll = window.pageYOffset
    const bottomRef = useRef()
    const finalSon = useRef()

    useLayoutEffect(() =>{ 
        setBottomHeigth(bottomRef.current.offsetTop)
       
       //console.log("bottom" + bottomHeight, "currentScroll" +currentScroll)
    },[animation])
    
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
   

    function change(){
        if(currentScroll > 10976){
            setAnimation(0)
            
        }
        if(currentScroll < 10976){
            setAnimation(1)
        
        }
        
    }


    return(
        <>
       
        <section className="indexDivided">
            <div className="left">
                <div className="left1">
                    <div className="left1Son"></div>
                </div>
                <div className="left2">
                    <h2></h2>
                    <p></p>
                </div>
                <div className="left3">
                    <div className="left3Son"> </div>
                </div>
                <div className="left4">
                    <h2></h2>
                    <p></p>
                </div>
                <div className="left5" ></div>

            </div>

            <div className="right">
                <div className="right1"></div>
                <div className="right2">
                    <h2>Methamorphosis</h2>
                    <p>Pokémon commonly undergo a process called evolution. During the course of a Pokémon's development, under certain circumstances specific to that Pokémon's subspecies, it may become a different Pokémon. </p>
                </div>
                <div className="right3">
                    <div className="right3Son"></div>
                </div>
                <div className="right4">
                    <h2></h2>
                    <p></p>
                </div>
                <div className="right5" >
                    <div className="right5Son"></div>
                </div>
            </div>
        

        </section>
       <section className="finalDivided" ref={bottomRef}>
         
             <div className="finalDividedSon"  style={{opacity:`${animation}`}} ref={finalSon}></div> 
                 
   
       </section>
       
        </>

    )

}

export default IndexDivided