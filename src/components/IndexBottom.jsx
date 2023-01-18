
import { useRef, useState, useLayoutEffect, useEffect, useCallback } from "react"
import { useInView } from "react-intersection-observer"

function IndexBottom() {
    const [opacity, setOpacity] = useState(0);
    const [firstImageRef, inView, entry] = useInView({
      threshold: 0,
    });
  
    useLayoutEffect(() => {
      if (inView) {
        setOpacity(entry.intersectionRatio);
      } else {
        setOpacity(0);
      }
    }, [inView, entry]);

    return (
        <section className="indexBottom">
           <div className="indexBottomTitle">
                <h1>Conocé a los pokemons</h1>
           </div> 

            <div className="bottomDivided">
                <div className="bottomLeft">
                    <div className="bottomLeft1">
                        <div className="bottomLeft1Son" ref={firstImageRef} style={{opacity:`${opacity}`}}></div>
                    </div>
                    <div className="bottomLeft2"></div>
                    <div className="bottomLeft3">
                        <p>Most Water-type Pokémon are based on creatures that live on water, or use water for their disposition. Their attacks involve use of water, if not, attacks that can be done only by marine creatures (like Clamp, Crabhammer and Razor Shell).</p>
                    </div>
                    <div className="bottomLeft4">
                        <div className="bottomLeft4Son"></div>
                    </div>
                    <div className="bottomLeft5"></div>
                    <div className="bottomLeft6">
                        <p>These Pokémon have a natural toxic quality; some directly represent real-world species known for their venom, such as snakes, and some even represent pollution itself. They normally live in caves, marshes or similar places.</p>
                    </div>
                    <div className="bottomLeft7">
                        <div className="bottomLeft7Son"></div>
                    </div>
                </div>
                <div className="bottomRight">
                    <div className="bottomRight1"> </div>
                    <div className="bottomRight2">
                        <p>Fire-type moves are based on attacks of fire itself, and most of them can leave the status Burn. Fire types are also immune to being Burned, regardless of the type of move used that would have inflicted a Burn.</p>
                        </div>
                    <div className="bottomRight3">
                        <div className="bottomRight3Son"></div>
                    </div>
                    <div className="bottomRight4"></div>
                    <div className="bottomRight5">
                        <p>Electric-type Pokémon have varied habitats, from forests and prairies to cities and power plants. Electric-type Pokémon are usually fast, and many of their attacks may paralyze the target. Some Electric-type Pokémon also resemble artificial objects used by humans which relate to electricity</p>
                    </div>
                    <div className="bottomRight6">
                        <div className="bottomRight6Son"></div>
                    </div>
                    <div className="bottomRight7"></div>
                    <div className="bottomRight8"></div>
                </div>
            </div>
        </section>

    )
}

export default IndexBottom