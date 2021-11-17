import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  render() {
    const { monsters , searchField } = this.state;

    // var filteredNum = numbers.filter(function(value) {
    //   return value > 10;
    // });

    //const searchFilter = monsters.filter(f => f.indexof(searchField) != -1);
    const filteredMonters = monsters.filter( monster => 
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input type='search' placeholder='search monsters'
          onChange={ e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonters}></CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

}

export default App;

