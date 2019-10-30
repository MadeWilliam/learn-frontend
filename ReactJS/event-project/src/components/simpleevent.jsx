import React, { Component } from 'react';

class SimpleEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {toggleStatus:true}
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        // alert('clicked');
        this.setState(state => ({toggleStatus:!state.toggleStatus}))
    }

    render() {
        return (
            <div className="simpleevent">
                <img className={this.state.toggleStatus? "imgOn" : "imgOff"} src={require('../images/image1.jpg')} alt="an image"/>
                <br />
                <button onClick={this.handleClick}>{!this.state.toggleStatus?"ON":"OFF"}</button>
            </div>
        );
    }
}

export default SimpleEvent;