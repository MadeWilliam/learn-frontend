import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      angka1: 0,
      angka2: 0,
      hasil: 0,
      type: "lingkaran"
    }
  }

  update = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  calculate = () => {
    let k_angka1 = this.state.angka1
    let k_angka2 = this.state.angka2
    let hasil = 0

    switch(this.state.type) {
      case "lingkaran" : hasil = 22/7 * k_angka1;
      break;
      case "persegi" : hasil = k_angka1 * k_angka1;
      break;
      default: hasil = k_angka1 * k_angka2;
      break;
    }
    this.setState({hasil});
  }

  switchTab = (name,val) => {
    this.setState({
      [name]:val
    })
  }

  render() {
    return (
      <div className="App">
        <center>
          <button onClick={() => {this.switchTab('type','persegi panjang')}}>Persegi Panjang</button>
          <button onClick={() => {this.switchTab('type','persegi')}}>Persegi</button>
          <button onClick={() => {this.switchTab('type','lingkaran')}}>Lingkaran</button>

          <div>
          {this.state.type === "persegi panjang" && 
            <div>
              <input type="number" name="angka1" placeholder="panjang" onChange={this.update} /><br />
              <input type="number" name="angka2" placeholder="lebar" onChange={this.update} /><br />
              <button onClick={this.calculate}>Calculate</button>
              <h1>Luas {this.state.type} adalah {this.state.hasil}</h1>
            </div>}
          {this.state.type === "persegi" && 
            <div>
              <input type="number" name="angka1" placeholder="sisi" onChange={this.update} /><br />
              <button onClick={this.calculate}>Calculate</button>
              <h1>Luas {this.state.type} adalah {this.state.hasil}</h1>
            </div>}
          {this.state.type === "lingkaran" && 
            <div>
              <input type="number" name="angka1" placeholder="diameter" onChange={this.update} /><br />
              <button onClick={this.calculate}>Calculate</button>
              <h1>Luas {this.state.type} adalah {this.state.hasil}</h1>
            </div>}
          </div>
        </center>
      </div>
    );
  }
}

export default App;
