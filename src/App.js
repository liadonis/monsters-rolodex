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
    
    return (
      <div className="App">
        <input type='search' placeholder='search monsters'
          onChange={e =>
            this.setState(
              { searchField: e.target.value },
              () => console.log(this.state.searchField)
            )
          }
        />
        <CardList monsters={this.state.monsters}></CardList>
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

