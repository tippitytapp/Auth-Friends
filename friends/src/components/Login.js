import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Route, Link} from 'react-router-dom';

function Login(){

    const [credentials, setCredentials] = useState({username: "", password: ""})
    
    function handleChange (e){
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    function login(e){
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res=>{
            console.log(res.data.payload);
            localStorage.setItem('token', JSON.stringify(res.data.payload));
        })
        .catch(err=>{
            console.log({err})
        })
    }
    return(
        <div className="loginForm">
        <img src="https://fontmeme.com/permalink/200421/f11e916d60807c2c2f088aea286093ce.png" alt="friends-tv-series-font" border="0"/>
            <h2>Login to See Friends</h2>
            <form className="login" onSubmit={login}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <Link to="/friends"><button className="submit">Login</button></Link>
            </form>
        </div>
    )
}

export default Login;