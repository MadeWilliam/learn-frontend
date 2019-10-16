import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Contact extends Component {
    render() {
        return (
            <div className="contact-wrapper">
                <div className="contact-layout">
                    <h2>Pusat Bantuan</h2>
                    <div className="contact-card-wrapper">
                        <div className="contact-card-1">
                            <div className="contact-card-1-content">
                                <h3>Customer Service - Indira</h3>
                                <p>Anda memiliki pertanyaan seputar layanan IndiHome? tanyakan langsung ke Indira - IndiHome Virtual Assistant. Indira siap membantu Anda menemukan solusi dari berbagai jenis bantuan seputar IndiHome.</p>
                                <button><Link to="/">Tanya Indira</Link></button>
                            </div>
                        </div>
                        <div className="contact-card-2">
                            <h3>Hubungi Kami</h3>
                            <div className="contact-card-2-content">
                                <ul>
                                    <li>Contact Center 147</li>
                                    <hr/>
                                    <li>Email</li>
                                    <hr/>
                                    <li>Plaza Telkom</li>
                                    <hr/>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-card-3">
                            <div className="contact-card-3-content">
                                <h3>Indipedia</h3>
                                <p>Temukan semua hal tentang layanan IndiHome dan pertanyaan populer di sini.</p>
                                <button><Link to="/">Lihat</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
