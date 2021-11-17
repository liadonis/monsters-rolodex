import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.setSearchField = this.setSearchField.bind(this);

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
        <SearchBox placeholder='search monsters' handleChange={e => this.handleChange(e)} />
        <CardList monsters={filteredMonters}></CardList>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

}

export default App;

