import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';




class App extends Component {

  state = {
    persons: [
{name: 'Ali', age: 22},
{name:'Bilal', age: 33}
    ]
  }

switchNameHandler = () => {

  console.log('Button pressed')
  this.setState (
    {
      persons: [
  {name: 'Usman', age: 22},
  {name:'Afroz', age: 33}
      ]
    }

  )
}

nameChangeHandler = (event) => {

  this.setState (
    {
      persons: [
  {name: 'Usman', age: 22},
  {name: event.target.value, age: 33}
      ]
    }

  )


}

  render() {
    return (
      
      <div className="App">
       <h1> Hello World </h1>
       <button onClick = {this.switchNameHandler} > Switch Name</button>
      <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}>Hobbies : Driving </Person>
      <Person 
      name={this.state.persons[1].name} 
      age= {this.state.persons[1].age}
      click= {this.switchNameHandler}
      changed = {this.nameChangeHandler} > </Person>


      </div>
    );
  }
}

export default App;
