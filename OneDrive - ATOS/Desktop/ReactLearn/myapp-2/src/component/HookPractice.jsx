import { useEffect, useRef, useState } from "react";

const HookPractice = () => {
 
function getRandomColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
}


const [counterValue, setCounterValue] = useState(0);
const [colorVal, setColorValue] = useState('#000000');
const referenceVal = useRef(0)

useEffect(() => {
    console.log('useEffect: counterValue changed');
    console.log(referenceVal.current);
    setColorValue(getRandomColor()); 
  }, [counterValue]); 


const updateState = () => {
     setCounterValue(counterValue + 1);
     referenceVal.current = counterValue;
}


    return (
      <div>
       <h3>  Use State :  Updates counter value using use state </h3>
        <h3> Use Effect : Updates color of button using use effect after every button click </h3>
        <h3> Use Reference : Open Console from Inspect Element to see useRef Demo </h3>
       <button style={{ color: colorVal }} onClick={updateState}> Click to update state value : {counterValue} </button>
      </div>
    )

}

export default HookPractice;