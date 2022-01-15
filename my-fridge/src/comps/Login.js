import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {

    return (
    <div className="login-form">
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <Button id="login-btn" variant="contained">Login</Button>
    </div>
    )
}

export default Login;