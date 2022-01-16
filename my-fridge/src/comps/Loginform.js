import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Loginform({Login, error}) {


    const [details, setDetails] = useState({username:"", password:""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);

        

    }

    return (
    <div>
    <form onSubmit={submitHandler}>
    <div className="login-form">
        <div className="username"><TextField  id="outlined-basic" label="Username" variant="outlined" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} /></div>
        <div className="password"><TextField id="outlined-basic-password" type="password" label="Password" variant="outlined" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} /></div>
        <div><Button id="login-btn"  variant="contained" type="submit">Login</Button></div>
        {(error != "") ? ( <div className="error">{error}</div>) : ""}
    </div>
    </form>
        </div>
    )
}

export default Loginform;
