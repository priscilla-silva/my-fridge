import React from "react";


const Signup = () => {

  
  

    return(
        <div>
    <form>
    <div className="signup-form">
        <form>
            <input type="text" className="text-field" label="First name" placeholder="First name"/>
            <input type="text" className="text-field" label="Last name" placeholder="Last name"/>
            <input type="date" className="text-field" label="DOB" />
            <input type="text" className="text-field" label="E-mail" placeholder="E-mail address"/>
            <input type="text" className="text-field" label="Username" placeholder="Choose a username"/>
            <input type="password" className="text-field" label="Password" placeholder="Choose a password"/>
        </form>
    </div>
    </form>
        </div>
    )
  };


export default Signup;