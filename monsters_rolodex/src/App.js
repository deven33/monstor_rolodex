import React from "react";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters : users}))
  }

  customHandle = (e) => {
    this.setState( { searchField : e.target.value } )
  }

  render() {
    const { monsters, searchField } = this.state; // cretes local copy of states data--obj names must be same 
    const filtereddMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='monster search' handleChange={ this.customHandle } />
      <CardList monsters={filtereddMonsters}/ > 
      </div>
    )
  }
}

export default App;
