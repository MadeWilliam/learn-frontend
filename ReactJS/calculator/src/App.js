import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
        this.makeButton = this.makeButton.bind(this);
    }

    update = (event) => {
        this.setState({ [event.target.button]: event.target.value });
        alert(this.state.number);
    }

    makeButton(nums) {
      let buttonArray = [1,2,3,4,5,6,7,8,9];

      for (let index = 1; index < 10; index++) {
        buttonArray.push(<button onClick={this.key={index}}>{index}</button>);
      }
      return buttonArray;
    }

    result = () => {
        let operator = this.state.operator;
        let angka1 = parseInt(this.state.angka1);
        let angka2 = parseInt(this.state.angka2);
        let hasil = 0;

        switch (operator) {
            case "+":
                hasil = angka1 + angka2;
                break;
            case "-":
                hasil = angka1 - angka2;
                break;
            case "*":
                hasil = angka1 * angka2;
                break;
            default:
                hasil = angka1 / angka2;
                break;
        }

        this.setState({
            hasil,
            isSubmitted: true
        });
        alert(hasil);
    };

    render() {
        return (
            <div>
                <center>
                    <div>
                      {this.makeButton(1)}
                        <button onClick={this.update}>number</button>
                        <button onClick={this.result}>Submit</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default App;
