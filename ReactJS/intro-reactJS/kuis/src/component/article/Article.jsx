import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Article extends Component {
    render() {
        return (
            <div className="tv-article-container">
                <div className="tv-wrapper">
                    <div className="tv-header-wrapper">
                        <h3>Berlangganan IndiHome dan nikmati konten terbaik di dalam layar TV Anda</h3>
                        <div className="tv-png-wrapper">
                            <img src={require('../../images/useetv-active.png')} alt="" />
                            <img src={require('../../images/hooq.png')} alt="" />
                            <img src={require('../../images/catchplay.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="movie-wrapper">
                    <img src={require('../../images/200x270-UCL-GENERAL_D.jpg')} alt="" />
                    <img src={require('../../images/200x270-UEL-GENERAL_D.jpg')} alt="" />
                    <img src={require('../../images/Nancy_Drew_IndiHome-Highlight_D.jpg')} alt="" />
                    <img src={require('../../images/200x270-DIVA-LUXURYESCAPES_D.jpg')} alt="" />
                    <div className="movie-description">
                        <ul>
                            <li>
                                <h5>Champions TV - <br />UEFA Champions League</h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5>Champions TV - <br />UEFA Europa League</h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5><h5>FOX Life - <br />Nancy Drew</h5></h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5>DIVA - <br />Luxury Escapes S4 </h5>
                                <p>USEETV</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="movie-wrapper">
                    <img src={require('../../images/200x270-UCL-GENERAL_D.jpg')} alt="" />
                    <img src={require('../../images/200x270-UEL-GENERAL_D.jpg')} alt="" />
                    <img src={require('../../images/Nancy_Drew_IndiHome-Highlight_D.jpg')} alt="" />
                    <img src={require('../../images/200x270-DIVA-LUXURYESCAPES_D.jpg')} alt="" />
                    <div className="movie-description">
                        <ul>
                            <li>
                                <h5>Champions TV - <br />UEFA Champions League</h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5>Champions TV - <br />UEFA Europa League</h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5><h5>FOX Life - <br />Nancy Drew</h5></h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5>DIVA - <br />Luxury Escapes S4 </h5>
                                <p>USEETV</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="movie-wrapper">
                    <img src={require('../../images/200x270-UCL-GENERAL_D.jpg')} alt="" />
                    <img src={require('../../images/200x270-UEL-GENERAL_D.jpg')} alt="" />
                    <img src={require('../../images/Nancy_Drew_IndiHome-Highlight_D.jpg')} alt="" />
                    <img src={require('../../images/200x270-DIVA-LUXURYESCAPES_D.jpg')} alt="" />
                    <div className="movie-description">
                        <ul>
                            <li>
                                <h5>Champions TV - <br />UEFA Champions League</h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5>Champions TV - <br />UEFA Europa League</h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5><h5>FOX Life - <br />Nancy Drew</h5></h5>
                                <p>USEETV</p>
                            </li>
                            <li>
                                <h5>DIVA - <br />Luxury Escapes S4 </h5>
                                <p>USEETV</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;
