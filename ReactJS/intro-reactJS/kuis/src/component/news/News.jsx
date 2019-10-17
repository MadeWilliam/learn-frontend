import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Propnews from './Propnews';
import Propnews2 from './Propnews2';

class News extends Component {
    render() {
        return (
            <div className="news-wrapper">
                <div className="news-layout">
                    <h2>IndiHome News</h2>
                </div>
                <div className="center-layout">
                    <div className="news-layout2">
                        <Propnews img={require("../../images/news-image1.jpg")} date="19 September 2019" title="Kini, IndiHome Hadir di Pulau Rote!..." desc="Sebagai bentuk komitmen PT Telkom Indonesia (Persero) Tbk (Telkom) untuk selalu ada dan berkontribusi menghadirkan konek..." />
                        <Propnews img={require("../../images/news-image2.jpg")} date="21 August 2019" title="Pemenang Undian IndiHome Miliarder Paket Semarak Kebahagiaan..." desc="Sebagai bentuk komitmen PT Telkom Indonesia (Persero) Tbk (Telkom) untuk selalu ada dan berkontribusi menghadirkan konek..." />
                    </div>
                    <div className="news-layout3">
                        <Propnews2 img={require("../../images/news-image3.jpg")} date="21 June 2019" title="Ini Dia Daftar Pemenang Undian 30 Paket Umroh di Bulan Ramad..." desc="Sebagai bentuk komitmen PT Telkom Indonesia (Persero) Tbk (Telkom) untuk selalu ada dan berkontribusi menghadirkan konek..." />
                        <Propnews2 img={require("../../images/news-image4.jpg")} date="13 May 2019" title="Pemenang Undian IndiHome Miliarder Paket Fantastic Deal..." desc="Sebagai bentuk komitmen PT Telkom Indonesia (Persero) Tbk (Telkom) untuk selalu ada dan berkontribusi menghadirkan konek..." />
                        <Propnews2 img={require("../../images/news-image5.jpg")} date="03 March 2019" title="Pemenang IndiHome Family Vaganza..." desc="Sebagai bentuk komitmen PT Telkom Indonesia (Persero) Tbk (Telkom) untuk selalu ada dan berkontribusi menghadirkan konek..." />
                        <Propnews2 img={require("../../images/news-image6.jpg")} date="10 February 2019" title="IndiHome Kembali Bagikan 11 Sepeda Motor melalui Undian Indi..." desc="Sebagai bentuk komitmen PT Telkom Indonesia (Persero) Tbk (Telkom) untuk selalu ada dan berkontribusi menghadirkan konek..." />
                    </div>
                    <button><Link to="/">See more</Link></button>
                </div>
            </div>
        );
    }
}

export default News;
