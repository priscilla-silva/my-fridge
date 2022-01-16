import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Login = () => {

    return (
    <div className="login-form">
        <div className="email"><TextField  id="outlined-basic" label="E-mail" variant="outlined" /></div>
        <div className="password"><TextField id="outlined-basic-password" type="password" label="Password" variant="outlined" /></div>
        <div><Button id="login-btn"  variant="contained">Login</Button></div>
    </div>
    )
}

export default Login;