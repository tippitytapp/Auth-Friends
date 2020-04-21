import React, {useState} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

function Login(){
    return(
        <div className="loginForm">
            <h2>Login to See Friends</h2>
            <form className="login" onSubmit="">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value=""
                    onChange=""
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value=""
                    onChange=""
                />
                <button className="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;