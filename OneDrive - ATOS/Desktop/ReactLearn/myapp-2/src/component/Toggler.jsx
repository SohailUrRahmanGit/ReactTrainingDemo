
import { useState } from "react";

const Toggler = () => {

    const [state, setState] = useState("OFF");

    const updateState = () => {
        if (state == "ON") {
          setState("OFF")
        }else {
            setState("ON")
        }
     
    }

    return(
       <div>
       <input type="checkbox" onClick={updateState} />
       <h1> The toggle State is {state} </h1>
       </div>
    )
}

export default Toggler;