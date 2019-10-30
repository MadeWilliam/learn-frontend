import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            result2: 0,
            operatorType: "",
            finalResult: 0
        };
        this.makeButton = this.makeButton.bind(this);
        this.makeOperator = this.makeOperator.bind(this);
        this.showInput = this.showInput.bind(this);
        this.reset = this.reset.bind(this);
    }

    showInput() {
        if(!this.statefinalResult && !this.state.result2){
            return this.state.result
        }
        if(!this.statefinalResult){
            return this.state.result2
        }
    };

    calculate = () => {
        let k_finalResult = 0;

        switch (this.state.operatorType) {
            case "+" :
            k_finalResult = parseInt(this.state.result) + parseInt(this.state.result2);
            this.setState({finalResult: k_finalResult})
            console.log("finalResult = ", k_finalResult);
            break;
            case "-" :
            k_finalResult = parseInt(this.state.result) - parseInt(this.state.result2);
            this.setState({finalResult: k_finalResult})
            console.log("finalResult = ", k_finalResult);
            break;
            case "/" :
            k_finalResult = parseInt(this.state.result) / parseInt(this.state.result2);
            this.setState({finalResult: k_finalResult})
            console.log("finalResult = ", k_finalResult);
            break;
            default :
            k_finalResult = parseInt(this.state.result) * parseInt(this.state.result2);
            this.setState({finalResult: k_finalResult})
            console.log("finalResult = ", k_finalResult);
            break;
        }
        
        console.log("result = ", this.state.result);
        console.log("result2 = ", this.state.result2);
        console.log("operatorType = ", this.state.operatorType);
        console.log("Outer finalResult = ", k_finalResult);
    };

    updateResult = event => {
        !this.state.operatorType
            ? this.setState({ result: event.target.name })
            : this.setState({ result2: event.target.name });
    };

    // clearResult = event => {
    //     this.setState({ result: 0})
    // }

    updateOperator = event => {
        this.setState({ operatorType: event.target.name });
    };

    makeButton(min, max) {
        let buttonArray = [];

        for (let index = min; index <= max; index++) {
            let cl = "button-" + index;
            buttonArray.push(
                <button
                    key={cl}
                    className="numberButton"
                    name={index}
                    onClick={this.updateResult}
                >
                    {index}
                </button>
            );
        }
        return buttonArray;
    }

    makeOperator(handleClick, operationType) {
        let operationTypeList = {
            add: "+",
            subtract: "-",
            divide: "/",
            multiply: "*",
            submit: "=",
            reset: "CE"
        };

        let cl = "button-" + operationType;
        return (
            <button
                key={cl}
                className="operationButton"
                name={operationTypeList[operationType]}
                onClick={handleClick}
            >
                {operationTypeList[operationType]}
            </button>
        );
    }

    reset(){
        this.setState({
            result: 0,
            result2: 0,
            operatorType: "",
            finalResult: 0
        })
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="result">{this.showInput()}</div>
                    <div className="result">{this.state.finalResult}</div>
                    <div className="buttonWrapper">
                        <div className="row">
                            {this.makeButton(1, 3)}
                            {this.makeOperator(this.updateOperator, "add")}
                            {this.makeOperator(this.updateOperator, "subtract")}
                        </div>
                        <div className="row">
                            {this.makeButton(4, 6)}
                            {this.makeOperator(this.updateOperator, "divide")}
                            {this.makeOperator(this.updateOperator, "multiply")}
                        </div>
                        <div className="row">
                            {this.makeButton(7, 9)}
                            {this.makeButton(0, 0)}
                            {this.makeOperator(this.calculate, "submit")}
                        </div>
                        <div className="row">
                            {this.makeOperator(this.reset, "reset")}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
