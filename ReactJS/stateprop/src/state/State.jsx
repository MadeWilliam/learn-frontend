import React, { Component } from 'react';

class Kursus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paket: "kursus programming",
            materi: "react js",
            desc: "belajar react js",
            harga: 200000
        };
    }
    render() {
        return (
            <div className="state wrapper">
                <h2>Nama Paket      : {this.state.paket}</h2><br/>
                <h2>Jenis Materi      : {this.state.materi}</h2><br/>
                <h2>Deskripsi Paket      : {this.state.desc}</h2><br/>
                <h2>Harga Paket      : {this.state.harga}</h2><br/>
            </div>
        );
    }
}

export default Kursus;