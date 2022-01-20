import React, {useState} from "react";
import Success from "./Success";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Signup = () => {

    return (
        
        <div>
            <div className="signup-form">
    <form>
            <div className="signup-form">
            <TextField  id="outlined-basic" className="sg-form" label="First name" placeholder="First name"  variant="outlined" />
            <TextField  id="outlined-basic" className="sg-form" label="Last name" placeholder="Last name"  variant="outlined" />
            </div>
            <div className="signup-form-1">
            <input type="date" className="text-field" label="DOB" min="1900-01-01" />
            <TextField  id="outlined-basic" label="First name" placeholder="First name"  variant="outlined" />
            </div>
            <div className="signup-form-2">
            <TextField  id="outlined-basic" label="Username" placeholder="Choose a Username"  variant="outlined" />
            <TextField  id="outlined-basic" label="Password" placeholder="Choose a password"  variant="outlined" />
            </div>
            <div className="signup-form-2">
            <textarea className="text-area" cols="36" rows="4" label="Bio" placeholder="Write a short bio"  />
            </div>
            <div className="terms">
            <input type="checkbox" id="termsandcond" name="termsandcond" value="termsandcond"></input>
            <label for="termsandcond"> I agree to the Terms and Conditions.</label>
            </div>
            <Routes> 
      <Route path="comps/Success" element={<Success /> } /*Doesn't seem to work*//> 
      </Routes>
       <Link to="/Success">
            <Button id="login-btn" variant="contained" type="submit">Submit</Button>
            </Link> 
    </form>
        </div>
        </div>
        
    )
}

export default Signup;

//create account (new component), another comp to redirect user either to local3000
//split into different comps