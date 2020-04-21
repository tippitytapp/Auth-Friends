import React, {useState} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

function Login(){
    return(
        <div className="loginForm">
        <img src="https://fontmeme.com/permalink/200421/f11e916d60807c2c2f088aea286093ce.png" alt="friends-tv-series-font" border="0"/>
            <h2>Login to See Friends</h2>
            <form className="login" onSubmit="">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    value=""
                    onChange=""
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value=""
                    onChange=""
                />
                <button className="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;