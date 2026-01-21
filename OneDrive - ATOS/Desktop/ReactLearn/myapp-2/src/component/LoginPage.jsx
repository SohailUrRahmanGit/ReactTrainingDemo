import { useMemo, useState } from "react";

const LoginPage = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const [value, setValue] = useState(0); // extra State

const heavyUsernameCheck = () => {
  console.log("Heavy validation running...");

  let count = 0;

  // artificial heavy loop
  for (let i = 0; i < 10000000; i++) {
    count += i;
  }

  // simple condition just to return something
  return username.length >= 5;
};

// const isUsernameValid = heavyUsernameCheck();

const isUsernameValid = useMemo(() => {
  return heavyUsernameCheck();
},[username]);

const updateUserName = (e) => {
  setUsername(e.target.value);
};

const updatePassword = (e) => {
  setPassword(e.target.value);
};
  return (
    <div>  
        <form>
        <input type="text" placeholder="Username" onChange={ updateUserName } /><br /><br />
        <input type="password" placeholder="Password" onChange={ updatePassword } /><br /><br />
        <button type="submit">Login</button>    
        </form> 
         <p>Username valid: {isUsernameValid ? "Yes" : "No"}</p>       
    </div>
  )
};

export default LoginPage;
