import React, { Component } from 'react'
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search/search-box.jsx"
import './App.css';

export default class App extends Component {
  constructor(){
    super();
      this.state = {
      monsters: [],
      searchField: ''
    };
    //Way of how "this" have to be binded to the method if not using arrow functions
   // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange =(e) => {
      this.setState({ searchField: e.target.value });
   }

  render() {
    //* This way of destructure is equal to use:
    //* const monsters = this.state.monsters;
    //* const searchField = this.state.searchField;
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters'
        handleChange={this.handleChange}  />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
