import React, { Component } from 'react';
import '../../styles/styles.css';

const Propnews2 = (props) => {
    return (
        <div className="news2 news-row-2">
            <div className="card">
                <div className="img-container">
                    <img src={props.img} alt="image-slidder" className="image-slidder" />
                </div>
                <div className="desc-container">
                    <p className="date">{props.date}</p>
                    <h3 className="title">{props.title}</h3>
                    <p className="desc">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Propnews2;