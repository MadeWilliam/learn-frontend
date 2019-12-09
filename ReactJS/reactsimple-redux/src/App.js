// import React, { Component } from "react";
// import { Route } from "react-router-dom";

// import Navbar from "./navbar";

// import Home from "./component/home";
// import Users from "./component/user";
// import Contact from "./component/contact";

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Simple React Router Redux</h1>
//                 <Navbar context={this.context} />
//                 <hr />
//                 <Route exact path="/" component={Home} />
//                 <Route path="/users" component={Users} />
//                 <Route path="/contact" component={Contact} />
//             </div>
//         );
//     }
// }

// export default App;

//====WITHOUT REDUCER====


import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      subscriber: 1999,
      isSubscribed: false,
      style: {
        backgroundColor: "green",
        color: "blue"
      },
      currentStyle: {},
      colorFlag: false
    };
    this.incrementAction = this.incrementAction.bind(this);
    this.decrementAction = this.decrementAction.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  incrementAction() {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrementAction() {
    this.setState({
      value: this.state.value - 1
    })
  }

  handleSubscribe() {
    this.state.isSubscribed
      ? this.setState({
        isSubscribed: false,
        subscriber: (this.state.subscriber - 1)
      })
      : this.setState({
        isSubscribed: true,
        subscriber: (this.state.subscriber + 1)
      })
  }


  handleColorChange() {
    let newState = {...this.state.style}
    newState.backgroundColor = "red"
    newState.color = "yellow"
    if (!this.state.colorFlag) {
      this.setState({ style: { ...newState }, currentStyle:{...this.state.style} , colorFlag: true })
      // console.log(this.state.colorFlag)
    } else {
      this.setState({ style: { ...this.state.currentStyle }, colorFlag: false })
      // console.log(this.state.colorFlag)
    }
  }

  render() {
    return <div>
      <h1>{this.state.value}</h1>
      <h1>Subscriber : {this.state.subscriber}</h1>
      <button style={{ backgroundColor: "red" }} onClick={this.incrementAction}>increment</button>
      <button onMouseOver={this.decrementAction}>decrement</button>
      {!this.state.isSubscribed &&
        <button style={{ backgroundColor: "blue" }} onClick={this.handleSubscribe}>Subscribe</button>
      }
      {this.state.isSubscribed &&
        <button onClick={this.handleSubscribe}>Unsubscribe</button>
      }
      <button style={this.state.style} onClick={this.handleColorChange}>Color changes</button>
    </div>;
  }
}

export default App;
