import React, {useState} from "react";
import Loginform from "./comps/Loginform";
import Signup from "./comps/Signup";
import Button from '@mui/material/Button';



function App() {
  const myUser = {
    username: "priscilla",
    password: "fridge123"
  }


  const [user, setUser] = useState({username:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.username == myUser.username && details.password == myUser.password) {
            console.log("Success!");
            setUser({
                username: details.username
            });
        } else {
            console.log("Fail!")
            setError("Incorrect username and/or password.")
        }

  }

  

  const Logout = () => {
    setUser({username:""})
  }


  return (
    <div className="App">
      {(user.username != "") ? (
        <div className="welcome-screen">
          <h2>Welcome, <span>{user.username}</span></h2>
          <div><Button id="logout-btn"  variant="contained" onClick={Logout}>Logout</Button></div>
        </div>
      ) : (
        <div className="main">
      <h1>My Fridge</h1>
      <Loginform Login={Login} error={error}/>
      <h4>Don't have an account yet? 
        <br />
      Sign up for free!</h4>
      <Signup />
      </div>
      )}
      </div>
      );
}


export default App;
