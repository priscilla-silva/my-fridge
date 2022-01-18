import React, {useState, useEffect, useRef} from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import Photo from "./comps/Photo";  
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

  const clientId = `?client_id${process.env.REACT_APP_ACCESS_KEY}`;
  const mainUrl = "https://api.unsplash.com/photos/";
  const searchurl = "https://api.unsplash.com/search/photos/";

  const [Loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    const fetchImages = async() => {
        setLoading(true);
        let url;

        url = `${mainUrl}${clientId}`;
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect (() => {
      fetchImages();
    }, [])

  return (
    <BrowserRouter>
    <div className="App">
      {(user.username != "") ? (
        <div className="welcome-screen">
          <p className="welcome-headline">Welcome, <span>{user.username}</span></p>
          <div><Button id="logout-btn"  variant="contained" onClick={Logout}>Logout</Button></div>
        </div>
      ) : (
        <div className="main">
      <p className="headline">My Fridge</p>
      <Loginform Login={Login} error={error}/>
        <p className="signup-tagline">Don't have an account yet? 
        <br />
        <Link to="/Signup">Sign up for free!</Link>
        <Routes>
      <Route path="/Signup"  element={<Signup />} />
      </Routes>
      </p>
         <Photo />   
    </div>
      )}
      </div>
      </BrowserRouter>
      );
}


export default App;
