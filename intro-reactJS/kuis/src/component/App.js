import React, {Component,Fragment} from 'react';
import '../styles/styles.css';
import Home from './home/Home.jsx';

class App extends Component {
    render() {
        return ( 
        <div className="header">
            <div class = "wrapper">
                <div className="navbar">
                    <div className="logo">
                        <img src={require('../images/logo.png')} alt=""/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#"><button>myIndiHome</button></a></li>
                            <li><a href="#">INFO TERKINI</a></li>
                            <li><a href="#">PUSAT BANTUAN</a></li>
                            <li><a href="#">PAKET & ADD-ON</a></li>
                            <li><a href="#">PROMO</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Fragment>
                <Home/>
            </Fragment>
        </div>
        )
    }

}

export default App;