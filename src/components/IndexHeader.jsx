import NavBar from "./NavBar"
import { useRef, useLayoutEffect, useState } from "react"

function IndexHeader(){
  
const [imgHeight, setImgHeight] = useState(0)
const [blurDegree, setBlurDegree] = useState(0)
const [opacity, setOpacity] = useState(0)

window.addEventListener("scroll", change)

const imgRef = useRef()
const btnRef = useRef()

const currentScroll = window.pageYOffset

useLayoutEffect(()=>{
    setImgHeight(imgRef.current.clientHeight)
},[imgHeight])


function change(){
    // Efecto scroll down para foto pokemon 
     if(currentScroll<=imgHeight/2){
         setBlurDegree( 15 - (currentScroll / 80) ) ;
     } else {
       setBlurDegree(0);
     }
       //Efecto scroll down para title
     if(currentScroll <=imgHeight/4){
        setOpacity(1 - (currentScroll/imgHeight*4)) 
      } else {
        setOpacity(0) 
      }
      //Efecto aparición de botones
      if(currentScroll>85){
        btnRef.current.classList.remove("btnShow")
       btnRef.current.classList.add("btnHide")
      } 
       if(currentScroll<100){
        btnRef.current.classList.remove("btnHide")
        btnRef.current.classList.add("btnShow")
       }
     

}


    return (
        <div className="indexHeader">
            <NavBar />
            <section className="dios" ref={imgRef}>
                <div className="semidios" style={{filter:`blur(${blurDegree}px)`}}></div>
                <div className="popup">
                    <div className="popupTitle" style={{opacity:`${opacity}`, transform:`scale(${opacity})`}}>
                        <div className="title">
                            <p className="pokeTitle">POKEMON</p>
                            <p className="pokeSubtitle">WORLD OF CREATURES</p>
                            <p className="pokeSubInfo">Hughe. Infinite. Adventures everywhere.</p>
                            <div className="popupBtn" ref={btnRef}>
                                <button>Watch introduction</button>
                                <button>Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           


        </div>
    )

    
}

export default IndexHeader