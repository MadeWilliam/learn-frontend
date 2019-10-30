import React, {Component,Fragment} from 'react';
import '../styles/styles.css';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';
import Register from './register/Register.jsx';
import Article from './article/Article.jsx';
import Contact from './contact/Contact.jsx';
import News from './news/News.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return ( 
            <Router>
                <div className="header">
                    <div class = "wrapper">
                        <div className="navbar">
                            <div className="logo">
                                <Link to="/">
                                    <img src={require('../images/logo.png')} alt=""/>
                                </Link>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li><Link to="/"><button>myIndiHome</button></Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/article">Article</Link></li>
                                    <li><Link to="/news">News</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Fragment>
                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/article" component={Article}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/news" component={News}/>
                    </Fragment>
                    <div className="footer">
                        <div className="footer-wrapper">
                            <div className="footer-row">
                                <div className="socmed-wrapper">
                                    <ul>
                                        <li>
                                            <img src={require("../images/facebook-logo.png")} alt="" /><Link to="/"></Link>
                                            <p>facebook</p>
                                        </li>
                                        <li>
                                            <img src={require("../images/twitter-logo.png")} alt="" /><Link to="/"></Link>
                                            <p>twitter</p>
                                        </li>
                                        <li>
                                            <img src={require("../images/instagram-logo.png")} alt="" /><Link to="/"></Link>
                                            <p>instagram</p>
                                        </li>
                                        <li>
                                            <img src={require("../images/phone-logo.png")} alt="" /><Link to="/"></Link>
                                            <p>call center 147</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="email-form">
                                    <form action="">
                                        <label for="email">Berlangganan newsletter sekarang</label>
                                        <input id="email" type="email" placeholder="Email Anda" />
                                        <input type="submit" value="SEND" />
                                    </form>
                                </div>
                            </div>
                            <div className="footer-link">
                                <div className="link-item link-1">
                                    <img src={require("../images/IndiHomeTokped-(Web)Home-Page-8468x400-(2)_D.jpg")} alt="" />
                                </div>
                                <div className="link-item link-2">
                                    <ul>
                                        <li>Kenali IndiHome</li>
                                        <li><Link to="/">Apa itu IndiHome?</Link></li>
                                        <li><Link to="/">Aplikasi myIndiHome</Link></li>
                                        <li><Link to="/">Triple Play</Link></li>
                                        <li><Link to="/">Dual Play</Link></li>
                                        <li><Link to="/">Single Play</Link></li>
                                        <li><Link to="/">Add-on</Link></li>
                                    </ul>
                                </div>
                                <div className="link-item link-3">
                                    <ul>
                                        <li>IndiHome</li>
                                        <li><Link to="/">Syarat & Ketentuan</Link></li>
                                        <li><Link to="/">Announcements</Link></li>
                                        <li><Link to="/">Tutorials</Link></li>
                                    </ul>
                                </div>
                                <div className="link-item link-4">
                                    <ul>
                                        <li>
                                            <img src={require("../images/bitmap.png")} alt="" />
                                        </li>
                                        <li>Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk All Right Reserved.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;