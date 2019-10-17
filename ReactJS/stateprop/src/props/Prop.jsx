import React, { Component } from 'react';
import './Prop-style.css';

const Materi = (props) => {
        return (
            <div className="materi wrapper">
                <div className="content">
                    <div className="img-container">
                        <img src={props.img}  alt="image-slidder" className="image-slidder"/>
                    </div>
                    <p className="desc">{props.desc}</p>
                    <p className="harga">{props.harga}</p>
                </div>
            </div>
        );
}

export default Materi;