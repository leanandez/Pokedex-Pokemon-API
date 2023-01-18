import { useState } from "react";

function IntroModal({openModal}) {
 
  return (
    <>

      {openModal && (
        <div className="introModal">
          <div>
            <p>Hola</p>
          </div>


        </div>
      )}
    </>
  )

}

export default IntroModal