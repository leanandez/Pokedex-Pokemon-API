import NavBar from "../components/NavBar"
import { useRef, useLayoutEffect, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IntroModal from "../components/IntroModal";


function Index() {
    const navigate = useNavigate()

    const [imgHeight, setImgHeight] = useState(0)
    const [blurDegree, setBlurDegree] = useState(10)
    const [opacity, setOpacity] = useState(0)

    window.addEventListener("scroll", change)

    const imgRef = useRef()
    const btnRef = useRef()

    //Index Bottom

    const [opacityFire, setOpacityFire] = useState(0);
    const [visibilityFire, setVisibilityFire] = useState(true)
    const [bottomFireHeight, setBottomFireHeigth] = useState()

    const [opacityWater, setOpacityWater] = useState(0)
    const [visibilityWater, setVisibilityWater] = useState(true)
    const [topWaterHeight, setTopWaterHeigth] = useState()
    const [bottomWaterHeight, setBottomWaterHeight] = useState()

    const [opacityElectricity, setOpacityElectricity] = useState(0)
    const [visibilityElectricity, setVisibilityElectricity] = useState(true)
    const [topElectricityHeight, setTopElectricityHeight] = useState()
    const [bottomElectricityHeight, setBottomElectricityHeight] = useState()

    const [opacityPoison, setOpacityPoison] = useState(0)
    const [visibilityPoison, setVisibilityPoison] = useState(true)
    const [topPoisonHeight, setTopPoisonHeight] = useState()
    const [bottomPoisonHeight, setBottomPoisonHeight] = useState()
    const [finalPoisonHeight, setFinalPoisonHeight] = useState()

    const bottomFire = useRef()
    const topWater = useRef()
    const bottomWater = useRef()
    const topElectricity = useRef()
    const bottomElectricity = useRef()
    const topPoison = useRef()
    const bottomPoison = useRef()
    const finalPoison = useRef()



    const [transformPokeball, setTransformPokeball] = useState("50")
    const [pokeballVisibility, setPokeballVisibility] = useState(false)
    const [topPokeballHeight, setTopPokeballHeight] = useState()
    const [bottomPokeballHeight, setBottomPokeballHeight] = useState()
    const topPokeball = useRef()
    const bottomPokeball = useRef()


    const currentScroll = window.pageYOffset

    useLayoutEffect(() => {
        setImgHeight(imgRef.current.clientHeight)

        setBottomFireHeigth(bottomFire.current.offsetTop)
        setTopWaterHeigth(topWater.current.offsetTop)

        setBottomWaterHeight(bottomWater.current.offsetTop)
        setTopElectricityHeight(topElectricity.current.offsetTop)

        setBottomElectricityHeight(bottomElectricity.current.offsetTop)
        setTopPoisonHeight(topPoison.current.offsetTop)

        setBottomPoisonHeight(bottomPoison.current.offsetTop)
        setFinalPoisonHeight(finalPoison.current.offsetTop)


        setTopPokeballHeight(topPokeball.current.offsetTop)
        setBottomPokeballHeight(bottomPokeball.current.offsetTop)
        //console.log("bottomElec=" + bottomElectricity.current.offsetTop, "topPoison=" + topPoison.current.offsetTop)
        //console.log("bottomPoison=" + bottomPoison.current.offsetTop, "finalPoison=" + finalPoison.current.offsetTop)
        //console.log("bottomPokeball - currentScroll = " + Math.sqrt(bottomPokeball.current.offsetTop - currentScroll))
        //console.log("transformPoke=" + transformPokeball)
        //console.log(currentScroll)
    }, [imgHeight, bottomFire, topWater, bottomWater, topElectricity, bottomElectricity, topPoison, bottomPoison, finalPoison, topPokeball, bottomPokeball])


    function change() {
        // Efecto scroll down para foto pokemon 
        if (currentScroll <= imgHeight / 2) {
            setBlurDegree(15 - (currentScroll / 80));
        } else {
            setBlurDegree(0);
        }
        //Efecto scroll down para title
        if (currentScroll <= imgHeight / 4) {
            setOpacity(1 - (currentScroll / imgHeight * 4))
        } else {
            setOpacity(0)
        }


        //Index bottom

        //Fire section
        if (currentScroll > bottomFireHeight && currentScroll < topWaterHeight) {
            setOpacityFire((topWaterHeight - currentScroll) / 2000)
            if (opacityFire < 0.4) {
                setVisibilityFire(false)
            }
            if (opacityFire > 0.4) {
                setVisibilityFire(true)
            }
        } else {
            setOpacityFire(1)
        }

        //Water section
        if (currentScroll > bottomWaterHeight && currentScroll < topElectricityHeight) {
            setOpacityWater((topElectricityHeight - currentScroll) / 2000)
            if (opacityWater < 0.4) {
                setVisibilityWater(false)
            }
            if (opacityWater > 0.4) {
                setVisibilityWater(true)
            }
        } else {
            setOpacityWater(1)
        }

        //Electricity section
        if (currentScroll > bottomElectricityHeight && currentScroll < topPoisonHeight) {
            setOpacityElectricity((topPoisonHeight - currentScroll) / 2000)
            if (opacityElectricity < 0.4) {
                setVisibilityElectricity(false)
            }
            if (opacityElectricity > 0.4) {
                setVisibilityElectricity(true)
            }
        } else {
            setOpacityElectricity(1)
        }

        //Poison section
        if (currentScroll > bottomPoisonHeight && currentScroll < finalPoisonHeight) {
            setOpacityPoison((finalPoisonHeight - currentScroll) / 2000)
            if (opacityPoison < 0.4) {
                setVisibilityPoison(false)

            }
            if (opacityPoison >= 0.4) {
                setVisibilityPoison(true)

            }
        } else {
            setOpacityPoison(1)

        }



        //Pokeball section
        if (currentScroll >= topPokeballHeight && currentScroll < bottomPokeballHeight) {
            setTransformPokeball((bottomPokeballHeight - currentScroll) / 100 - 20)
            setPokeballVisibility(true)

        } else {
            setTransformPokeball("50")
            setPokeballVisibility(false)
        }

    }


    // Modal
    const [isOpen, setIsOpen] = useState(false)






    return (
        <div className="index">
            <NavBar />

            {isOpen && (
                <div className="introModal">
                    <div className="modalVideo">
                    <button onClick={()=>{setIsOpen(false); document.body.style.overflow="initial"}}>X</button>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6xKWiCMKKJg" title="Pokémon Season 1: Indigo League - Opening Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

            )}


            {/* Index Header */}
            <div className="indexHeader">
                <section className="dios" ref={imgRef}>
                    <div className="semidios" style={{ filter: `blur(${blurDegree}px)` }}></div>
                    <div className="popup">
                        <div className="popupTitle" style={{ opacity: `${opacity}`, transform: `scale(${opacity})` }}>
                            <div className="title">
                                <p className="pokeTitle">POKEMON</p>
                                <p className="pokeSubtitle">WORLD OF CREATURES</p>
                                <p className="pokeSubInfo">Hughe. Infinite. Adventures everywhere.</p>
                                <div className="popupBtn" ref={btnRef} style={{ opacity: (currentScroll < 100) ? "1" : "0" }}>
                                    <button onClick={() => { setIsOpen(true); document.body.style.overflow="hidden" }}>WATCH INTRO</button>
                                    <button onClick={() => { navigate("../pokemons") }}>POKEDEX</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Index About */}

            <div className="indexAbout" >
                <h2>WHAT IS POKEMON WORLD?</h2>
                <p>Pokémon World is the name given to the Earth-like planet (possibly a parallel universe version of Earth) that the Pokémon franchise takes place on. Humans live on this planet alongside Pokémon as a human-animal-like relationship.</p>
            </div>

            {/* Index Divided */}


            <section className="indexDivided">
                <div className="left">
                    <div className="left1">
                        <div className="left1Son"></div>
                    </div>
                    <div className="left2">
                        <h2>POKEMON KINDS</h2>
                        <p>Just how many kinds of Pokémon exist? The exact number is unknown. While over 800 kinds of Pokémon have been confirmed, as of yet unseen Pokémon will surely be discovered in the future.</p>
                    </div>
                    <div className="left3">
                        <div className="left3Son"> </div>
                    </div>
                    <div className="left4">
                        <h2>SCIENCE</h2>
                        <p>Technological advances have evolved the Pokémon world, scientists have created ways to store Pokémon on computers, send Pokémon around the world, send Pokémon back in time and clone Fossils to create prehistoric Pokémon.</p>
                    </div>
                    <div className="left5" ></div>
                </div>

                <div className="right">
                    <div className="right1"></div>
                    <div className="right2">
                        <h2>METHAMORPHOSIS</h2>
                        <p>Pokémon commonly undergo a process called evolution. During the course of a Pokémon's development, under certain circumstances specific to that Pokémon's subspecies, it may become a different Pokémon. </p>
                    </div>
                    <div className="right3">
                        <div className="right3Son"></div>
                    </div>
                    <div className="right4">
                        <h2>REPRODUCTION</h2>
                        <p>Nearly every Pokémon undergoes some form of reproduction. It is unknown how a Pokémon reproduces, as no one has seen a Pokémon reproduce. Based on this, it is safe to assume that they only reproduce when left alone.</p>
                    </div>
                    <div className="right5" >
                        <div className="right5Son"></div>
                    </div>
                </div>
            </section>
            <section className="finalDivided" >
                <div className="finalDividedSon" ></div>
            </section>

            {/* Index bottom */}

            <section className="indexBottom">
                <div className="indexBottomTitle">
                    <h1>MEET EACH ELEMENT</h1>
                </div>

                <div className="bottomDivided">
                    <div className="bottomLeft">
                        <div className="bottomLeft1">
                            <div className="bottomLeft1Son" style={{ opacity: `${opacityFire}`, transform: `scale(${opacityFire})`, transformOrigin: "right", visibility: visibilityFire ? "visible" : "hidden" }}></div>
                        </div>
                        <div className="bottomLeft2"></div>
                        <div className="bottomLeft3" >
                            <div className="bottomLeft3Son" ref={bottomWater} style={{ opacity: `${opacityWater}`, transform: `scale(${opacityWater})`, transformOrigin: "right", visibility: visibilityWater ? "visible" : "hidden" }}>
                                <p>Most Water-type Pokémon are based on creatures that live on water, or use water for their disposition. Their attacks involve use of water, if not, attacks that can be done only by marine creatures (like Clamp, Crabhammer and Razor Shell).</p>
                            </div>
                        </div>
                        <div className="bottomLeft4" ref={topElectricity}>
                            <div className="bottomLeft4Son" style={{ opacity: `${opacityElectricity}`, transform: `scale(${opacityElectricity})`, transformOrigin: "right", visibility: visibilityElectricity ? "visible" : "hidden" }}></div>
                        </div>
                        <div className="bottomLeft5"></div>
                        <div className="bottomLeft6">
                            <div className="bottomLeft6Son" ref={bottomPoison} style={{ opacity: `${opacityPoison}`, transform: `scale(${opacityPoison})`, transformOrigin: "right", visibility: visibilityPoison ? "visible" : "hidden" }}>
                                <p>These Pokémon have a natural toxic quality; some directly represent real-world species known for their venom, such as snakes, and some even represent pollution itself. They normally live in caves, marshes or similar places.</p>
                            </div>

                        </div>
                    </div>

                    <div className="bottomRight">
                        <div className="bottomRight1"> </div>
                        <div className="bottomRight2" >
                            <div className="bottomRight2Son" ref={bottomFire} style={{ opacity: `${opacityFire}`, transform: `scale(${opacityFire})`, transformOrigin: "left", visibility: visibilityFire ? "visible" : "hidden" }}>
                                <p>Fire-type moves are based on attacks of fire itself, and most of them can leave the status Burn. Fire types are also immune to being Burned, regardless of the type of move used that would have inflicted a Burn.</p>
                            </div>
                        </div>
                        <div className="bottomRight3" ref={topWater}>
                            <div className="bottomRight3Son" style={{ opacity: `${opacityWater}`, transform: `scale(${opacityWater})`, transformOrigin: "left", visibility: visibilityWater ? "visible" : "hidden" }}></div>
                        </div>
                        <div className="bottomRight4"></div>
                        <div className="bottomRight5" ref={bottomElectricity}>
                            <div className="bottomRight5Son" style={{ opacity: `${opacityElectricity}`, transform: `scale(${opacityElectricity})`, transformOrigin: "left", visibility: visibilityElectricity ? "visible" : "hidden" }}>
                                <p>Electric-type Pokémon have varied habitats, from forests and prairies to cities and power plants. Electric-type Pokémon are usually fast, and many of their attacks may paralyze the target. Some Electric-type Pokémon also resemble artificial objects used by humans which relate to electricity</p>
                            </div>
                        </div>
                        <div className="bottomRight6" ref={topPoison}>
                            <div className="bottomRight6Son" style={{ opacity: `${opacityPoison}`, transform: `scale(${opacityPoison})`, transformOrigin: "left", visibility: visibilityPoison ? "visible" : "hidden" }}></div>
                        </div>
                        <div ref={finalPoison}></div>
                    </div>
                </div>
            </section>

            <div className="pikachu" style={{ opacity: visibilityPoison ? "0" : "1", zIndex: visibilityPoison ? "-1" : "4", visibility: (currentScroll > bottomPokeballHeight - 200) ? "hidden" : "visible" }}></div>

            <section className="pokeballFather">
                <section className="pokeball" ref={topPokeball} style={{ animationName: pokeballVisibility ? "pokeballIn" : "pokeballOut", zIndex: (transformPokeball <= 0) ? "-2" : "5" }}>
                    <div className="pokeball1" style={{ transform: `translate3d(${-transformPokeball}%,${-transformPokeball}%,0 )`, visibility: pokeballVisibility ? "visible" : "hidden" }}></div>
                    <div className="pokeball2" style={{ transform: `translate3d(0,${-transformPokeball}%,0 )`, visibility: pokeballVisibility ? "visible" : "hidden" }}></div>
                    <div className="pokeball3" style={{ transform: `translate3d(${transformPokeball}%,${-transformPokeball}%,0 )`, visibility: pokeballVisibility ? "visible" : "hidden" }}></div>
                    <div className="pokeball4" style={{ transform: `translate3d(${transformPokeball}%,0,0 )`, visibility: pokeballVisibility ? "visible" : "hidden" }}></div>
                    <div className="pokeball5" style={{ transform: `translate3d(0,${transformPokeball}%,0 )`, visibility: pokeballVisibility ? "visible" : "hidden" }}></div>
                    <div className="pokeball6" style={{ transform: `translate3d(${-transformPokeball}%,${transformPokeball}%,0 )`, visibility: pokeballVisibility ? "visible" : "hidden" }}></div>


                </section>

            </section>
            <section className="pokeballFather2" style={{ zIndex: (transformPokeball <= 0 || currentScroll > bottomPokeballHeight) ? "5" : "-1" }}>
                <div className="pokeballCompleteFragments" style={{ visibility: (transformPokeball <= 0) ? "visible" : "hidden", transform: `rotate(${transformPokeball * 18}deg)`, opacity: (currentScroll > bottomPokeballHeight) ? "0" : "1" }} ></div>
                <div className="pokeballComplete" style={{ opacity: (currentScroll > bottomPokeballHeight) ? "1" : "0", animationName: (currentScroll > bottomPokeballHeight) ? "pokeballCompleteAnimation" : "" }}></div>
                <div className="pokeballCenter" style={{ opacity: (currentScroll > bottomPokeballHeight) ? "1" : "0", animationName: (currentScroll > bottomPokeballHeight) ? "pokeballCenterAnimation" : "" }}></div>
            </section>

            <section className="indexChoose" ref={bottomPokeball}>
                <div className="indexChooseSon" style={{ animationName: (currentScroll > bottomPokeballHeight) ? "choosePokemon" : "" }}> <Link to="/pokemons"><div className="choosePokemonLink"></div></Link> </div>
            </section>




        </div>
    )
}

export default Index