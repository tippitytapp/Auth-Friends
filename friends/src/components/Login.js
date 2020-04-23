import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Route, Link} from 'react-router-dom';

class Login extends React.Component{

    state={
        credentials:{
            username: "",
            password: ""
        },
        isLoading:false
    }   
    
    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            },
            isLoading: true
        })
    }
    login=e=> {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res=>{
            console.log(res.data.payload);
            this.setState({
                isLoading: false
            })
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            this.props.history.push("/friends")

        })
        .catch(err=>{
            console.log({err})
        })
    }
    render(){
    return(
        <div className="loginForm">
        <img src="https://fontmeme.com/permalink/200421/f11e916d60807c2c2f088aea286093ce.png" alt="friends-tv-series-font" border="0"/>
            <h2>Login to See Friends</h2>
            <form className="login" onSubmit={this.login}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button className="submit">Login</button>
            </form>
        </div>
    )
}
}

export default Login;