import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {

  // constructor //////////////////////////////////
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  // life cycle methods //////////////////////////////////
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ monsters: json }));
  }

  // render //////////////////////////////////
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toUpperCase().includes(searchField.toUpperCase());
    });

    return (
      <div className="App">
        <h1>Robodex</h1>
        <SearchBox
          placeholder="search monsters here"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  // handleChange //////////////////////////////
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

}

export default App;
