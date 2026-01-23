import { useState } from "react";

const SomeInput = () => {

    const [name,setName] = useState("");

    const setValue = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
     };

    return (<div>
        <input  onChange = { setValue } type="text" placeholder="Enter Username" /> <br /><br /> 

        <input type="password" placeholder="Password" /><br /><br />

    <input type="email" placeholder="Email" /><br /><br />

    <input type="number" placeholder="Number" /><br /><br />

    <input type="search" placeholder="Search" /><br /><br />

    <input type="tel" placeholder="Phone Number" /><br /><br />

    <input type="url" placeholder="https://sohailurrahmangit.github.io/" /><br /><br />

    <input type="date" /><br /><br />

    <input type="range" /><br /><br />

    <input type="checkbox" /> Checkbox <br /><br />

    <input type="radio" /> Radio <br /><br />

    <input type="file" /><br /><br />

    <input type="hidden" value="hiddenValue" /><br /><br />

    <input type="submit" value="Submit" /><br /><br />

    <input type="reset" value="Reset" /><br /><br /> 
          </div>);


};

export default SomeInput;