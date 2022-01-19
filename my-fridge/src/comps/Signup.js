import React, {useState} from "react";
import Success from "./Success";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";



const Signup = () => {

    return (
        
        <div>
            <div className="signup-form">
    <form>
            <div className="signup-form-0">
            <input type="text" className="text-field" label="First name" placeholder="First name"  />
            <input type="text" className="text-field" label="Last name" placeholder="Last name"  />
            </div>
            <div className="signup-form-1">
            <input type="date" className="text-field" label="DOB" min="1900-01-01" />
            <input type="text" className="text-field" label="E-mail" placeholder="E-mail address"  />
            </div>
            <div className="signup-form-2">
            <input type="text" className="text-field" label="Username" placeholder="Choose a username"  />
            <input type="password" className="text-field" label="Password" placeholder="Choose a password"  />
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
            <button id="submit" type="submit">Submit</button>
            </Link> 
    </form>
        </div>
        </div>
        
    )
}

export default Signup;

//create account (new component), another comp to redirect user either to local3000
//split into different comps