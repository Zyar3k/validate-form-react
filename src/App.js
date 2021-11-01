import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit} autoComplete="false">
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="birthday" placeholder="Birthday" />
        <FormInput name="password" placeholder="Password" />
        <FormInput name="confirmPassword" placeholder="Confirm Password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
