import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./navbar";

import Home from "./component/home";
import Users from "./component/user";
import Contact from "./component/contact";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Simple React Router Redux</h1>
                <Navbar context={this.context} />
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default App;

/* //====WITHOUT REDUCER====


import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.incrementAction = this.incrementAction.bind(this);
        this.decrementAction = this.decrementAction.bind(this);
    }

    incrementAction() {
      this.setState({
        value: this.state.value+1
      })
    }

    decrementAction() {
      this.setState({
        value: this.state.value-1
      })
    }

    render() {
        return <div>
          <h1>{this.state.value}</h1>
          <button onClick={this.incrementAction}>increment</button>
          <button onClick={this.decrementAction}>decrement</button>
        </div>;
    }
}

export default App; */
