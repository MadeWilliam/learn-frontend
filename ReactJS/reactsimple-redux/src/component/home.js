import React, { Component } from "react";
import { connect } from "react-redux";

import { incrementAction, decrementAction } from "../store/actions/action";

class Home extends Component {
    render() {
        const { value, decrementAction, incrementAction } = this.props;
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={incrementAction}>Increment</button>
                <button onClick={decrementAction}>Decrement</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.value
    };
};

const mapDispatchtToProps = dispatch => {
    return {
        incrementAction: () => dispatch(incrementAction()),
        decrementAction: () => dispatch(decrementAction())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchtToProps
)(Home);
