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
    setState(state - 1);
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