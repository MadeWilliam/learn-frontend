import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-layout">
                    <h2>Welcome to IndiHome</h2>
                    <div className="login-card-wrapper">
                        <div className="login-card">
                            <div className="login-card-content">
                                <h3>Login</h3>
                                <div className="login-email-form">
                                    <form action="">
                                        <label for="username">Username</label>
                                        <input id="username" type="text" placeholder="Username Anda" />
                                        <label for="email">Email</label>
                                        <input id="email" type="email" placeholder="Email Anda" />
                                        <label for="password">Password</label>
                                        <input id="password" type="password" placeholder="Password Anda" />
                                        <label for="password">Confirm Password</label>
                                        <input id="password" type="password" placeholder="Confirm Password Anda" />
                                    </form>
                                </div>
                                <div className="socmed-login">
                                    <ul>
                                        <li>
                                            <img src={require("../../images/facebook-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                        <li>
                                            <img src={require("../../images/twitter-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                        <li>
                                            <img src={require("../../images/instagram-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                        <li>
                                            <img src={require("../../images/phone-logo.png")} alt="" /><Link to="/"></Link>
                                        </li>
                                    </ul>
                                </div>
                                <button><Link to="/">Login</Link></button>
                                <p className="login-text">Belum punya akun? <span><Link to="/register">Daftar di sini</Link></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="login-house">
                        <div className="login-house-content">
                            <img src={require("../../images/login-house.png")} alt="" />
                            <h3>Kendali dalam Genggaman</h3>
                            <p>Kemudahan mengatur semua fitur IndiHome dalam genggaman Anda.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
