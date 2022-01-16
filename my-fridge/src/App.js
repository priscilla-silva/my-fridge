import React, {useState} from "react";
import Login from "./comps/Login";



function App() {

  // const myCredentials = {
  //   email: "priscilla@myfridge.com",
  //   password: "fridge123"
  // }

  // const [user, setUser] = useState({email:""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);
  // }

  // const logout = () => {
  //   console.log("log out");
  // }

  return (
    <div className="App">
      <div className="main">
      <h1>My Fridge</h1>
      <Login />
      <h4>Don't have an account yet? Sign up for free!</h4>
      </div>
    </div>
  );
}

export default App;
