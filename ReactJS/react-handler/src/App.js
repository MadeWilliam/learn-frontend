import React, { Component } from 'react'
import Validation from './Components/Validation/Validation'
import Char from './Components/Char/Char'
import CharList from './Components/Char/CharList'

export default class App extends Component {
  state = {
    inputValue: "Hello"
  }

  changeInputHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  deleteHandler = (index) => {
    let char = this.state.inputValue.split('')
    char.splice(index, 1)
    let updatedText = char.join('')
    this.setState({
      inputValue: updatedText
    })
  }

  render() {
    const charlist = this.state.inputValue.split('').map((ch, index) => {
      return <Char character={ch} key={index} click={() => this.deleteHandler(index)} />
    })

    return (
      <div>
        <input type="text" onChange={this.changeInputHandler} value={this.state.inputValue} />
        <hr />
        <p>{this.state.inputValue}</p>
        <hr />
        <Validation inputLength={this.state.inputValue.length} />
        {charlist}
        {/* <CharList inputValue={this.state.inputValue} click={this.deleteHandler}/> */}
      </div>
      )
    }
}