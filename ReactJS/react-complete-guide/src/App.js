import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'
import Radium from 'radium'

const StyledButton = styled.button`
      border-radius: 8px;
      background-color: ${props => props.alt ? 'red' : 'green'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
`

class App extends Component {
  state = {
    persons: [
      { id: "dsadsa", name: "made", age: 24 },
      { id: "sdasda", name: "william", age: 25 },
      { id: "asdasd", name: "mahardika", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const newPerson = { ...this.state.persons[personIndex] }
    newPerson.name = event.target.value

    const newPersons = [...this.state.persons]
    newPersons[personIndex] = newPerson;

    this.setState({
      persons: newPersons
    })
  }

  ageChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    const newPerson = { ...this.state.persons[personIndex] }
    newPerson.age = event.target.value

    const newPersons = [...this.state.persons]
    newPersons[personIndex] = newPerson

    this.setState({
      persons: newPersons
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { ...this.state.persons[0], name: newName },
        { ...this.state.persons[1], name: "switched" },
        { ...this.state.persons[2], name: "switched" },
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons]
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    })
  }

  render() {
    const style = {
      borderRadius: "8px",
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              switchName={this.switchNameHandler.bind(this, "passed")}
              ageChanged={(event) => this.ageChangedHandler(event, person.id)}
              deletePerson={() => this.deletePersonHandler(index)}
              nameChanged={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          })}
        </div>

      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'aqua',
        color: 'white'
      }

    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
        <div className="App">
          <h1>Hi, I am a react app</h1>
          <p className={classes.join(' ')}>Is this working</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Styled-Components Toggle</StyledButton>
          <br/>
          <button style={style} onClick={this.togglePersonsHandler}>Radium Toggle</button>
          <button className="button">CSS-Module Button</button>
          {persons}
        </div>
    );
  }
}

export default Radium(App);
