import React, {useState, useEffect, useRef} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Loginform from "./comps/Loginform";
import Signup from "./comps/Signup";
import Button from '@mui/material/Button';
import Welcome from "./comps/Welcome";



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
            setUser({
                username: details.username
            });
        } else {
            setError("Incorrect username and/or password.")
        }

  }

  

  const Logout = () => {
    setUser({username:""})
  }

  

  return (
    <BrowserRouter>
    <div className="App">
      {(user.username != "") ? ( //get rid of this or see if we can find where it redirects
        <div className="welcome-screen">
           <p className="logo-small">My Fridge</p>
          <p className="welcome-headline">Welcome, <span>{user.username}!</span></p>
          <p className="welcome-subline">What foods would you like to exchange today?</p>
          <Welcome />
          <div className="logout-button"><Button id="logout-btn"  variant="contained" onClick={Logout}>Logout</Button></div>
        </div>
      ) : (
        <div className="main">
      <p className="logo">My Fridge</p>
     
      <Loginform Login={Login} error={error}/>
    <br/>
        <p className="signup-tagline">Don't have an account yet? 
        <br />
        <Link to="/Signup">Sign up for free!</Link>
        <br />
        <br />
        <Routes>
      <Route path="/Signup"  element={<Signup />} />
      </Routes>
      </p>
    
    </div>
      )}
      </div>
      </BrowserRouter>
      );
}


export default App;
