import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        value: state.value
    };
};

class Contact extends Component {
    render() {
        const {value} = this.props;
        return (
            <div>
                <h1>Isinya adalah : {value}</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(Contact);
