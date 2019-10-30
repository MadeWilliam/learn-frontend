import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      angka1:0,
      angka2:0,
      hasil:0,
      operator:"",
      isSubmitted:false
    }
    this.update = this.update.bind(this);
  }

 update(event){
   this.setState(
     {[event.target.name]:event.target.value});
 }

 previous = () => {
   this.setState({
     isSubmitted : false
   });
 }

 result = () => {
   let operator = this.state.operator;
   let angka1 = parseInt(this.state.angka1);
   let angka2 = parseInt(this.state.angka2);
   let hasil = 0;
   
   switch(operator) {
     case "+": hasil = angka1 + angka2;
     break;
     case "-": hasil = angka1 - angka2;
     break;
     case "*": hasil = angka1 * angka2;
     break;
     default: hasil = angka1 / angka2;
     break;
   }

   this.setState({
     hasil, isSubmitted: true
   });
   alert(hasil)
 }

  render() {
    return (
      <div>
        <center>
        {this.state.isSubmitted 
        ? (
          <div>
            <h1>Hasil {this.state.angka1} {this.state.operator} {this.state.angka2} adalah {this.state.hasil}</h1>
            <button onClick={this.previous}>Go back home</button>
          </div>
          ) 
        : (
          <div>
            <input type="number" name="angka1" placeholder="Angka1" onChange={this.update}/>
            <br/><br/>

            <select onChange={this.update} name="operator">
              <option>=Pilih Operator=</option>
              <option>+</option>
              <option>-</option>
              <option>*</option>
              <option>/</option>
            </select>
            <br/><br/>

            <input type="number" name="angka2" placeholder="Angka2" onChange={this.update}/>
            <br/><br/>

            <button onClick={this.result}>Submit</button>
          </div>)}
        </center>
      </div>
    );
  }
}

export default App;


