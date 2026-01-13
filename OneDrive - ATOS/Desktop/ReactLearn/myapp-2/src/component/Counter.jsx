// function Counter() {
//     return (
//       <div>
//         <h2> Counter Component: Default Export </h2>
//       </div>
//     )
// }

import { useState } from "react"

// function NamedExportCounter() {
//   return (
//     <div>
//         <h3> This is example of Named export </h3>
//     </div>
//   )
// }


const Counter = () => {
    
   const [state, setState]  = useState(0);

   const handleIncreament = () => {
    setState(state + 1);
   }

   const handledDecreament = () => {
     if (state > 0) {
         setState(state - 1);
         }
   }
      
   const reset = () => {
    setState(0);
   }

    return (
      <div>
        <h2> Counter Component: Default Export </h2>
        <h2> This is the value of current State : {state} </h2> 
        <button onClick={handleIncreament}>
            Cick Me to increase the Component state
        </button>
        <button onClick={handledDecreament}>
            Click Me to Decreae the Component state
        </button>
                <button onClick={reset}>
            Reset Counter
        </button>

      </div>
    )
}

const NamedExportCounter = () => {
  return (
    <div>
        <h3> This is example of Named export </h3>
    </div>
  )
}

export default Counter;
export { NamedExportCounter }