import React, { Component, Fragment } from 'react';


class Home extends Component {
    render() {
        return (
            <Fragment className="contentHome">
                <div className="slider">
                    <div className="slidercontent">
                        <img src={require('../../images/desktop.jpg')} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <h2>Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</h2>
                    </div>
                    <div className="content-wrapper">
                        <div className="content-img img1">
                            <img src={require('../../images/premium-hires_D.jpg')} alt="" />
                        </div>
                        <div className="content-img img2">
                            <img src={require('../../images/edukids-home.jpg')} alt="" />
                        </div>
                        <div className="content-img img3">
                            <img src={require('../../images/catchplay-home.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="addon">
                        <h3>Add-on Unggulan</h3>
                        <div className="addon-wrapper">
                            <div className="addon-img img4">
                                <img src={require('../../images/hooq-home.jpg')} alt="" />
                            </div>
                            <div className="addon-img img5">
                                <img src={require('../../images/iflix-home.jpg')} alt="" />
                            </div>
                            <div className="addon-img img6">
                                <img src={require('../../images/edukids-home.jpg')} alt="" />
                            </div>
                            <div className="addon-img img7">
                                <img src={require('../../images/catchplay-home.jpg')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tv-container">
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
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-row">
                        <div className="socmed-wrapper">
                            <ul>
                                <li>
                                    <img src={require("../../images/facebook-logo.png")} alt="" /><a href="#"></a>
                                    <p>facebook</p>
                                </li>
                                <li>
                                    <img src={require("../../images/twitter-logo.png")} alt="" /><a href="#"></a>
                                    <p>twitter</p>
                                </li>
                                <li>
                                    <img src={require("../../images/instagram-logo.png")} alt="" /><a href="#"></a>
                                    <p>instagram</p>
                                </li>
                                <li>
                                    <img src={require("../../images/phone-logo.png")} alt="" /><a href="#"></a>
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
                            <img src={require("../../images/IndiHomeTokped-(Web)Home-Page-8468x400-(2)_D.jpg")} alt="" />
                        </div>
                        <div className="link-item link-2">
                            <ul>
                                <li>Kenali IndiHome</li>
                                <li><a href="">Apa itu IndiHome?</a></li>
                                <li><a href="">Aplikasi myIndiHome</a></li>
                                <li><a href="">Triple Play</a></li>
                                <li><a href="">Dual Play</a></li>
                                <li><a href="">Single Play</a></li>
                                <li><a href="">Add-on</a></li>
                            </ul>
                        </div>
                        <div className="link-item link-3">
                            <ul>
                                <li>IndiHome</li>
                                <li><a href="">Syarat & Ketentuan</a></li>
                                <li><a href="">Announcements</a></li>
                                <li><a href="">Tutorials</a></li>
                            </ul>
                        </div>
                        <div className="link-item link-4">
                            <ul>
                                <li>
                                    <img src={require("../../images/bitmap.png")} alt="" />
                                </li>
                                <li>Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk All Right Reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;
