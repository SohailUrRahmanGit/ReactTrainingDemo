import { useState } from "react";
import DynamicForms from "./DynamicForms";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

const handleChange = (e) => {}

  return (
    <form>
      <DynamicForms
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <br /><br />
      <DynamicForms
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <br /><br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;