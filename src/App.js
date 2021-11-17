import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {
            this.state.monsters.map((monster, index) => {
              return (
                <h1 key={monster.id}>{monster.name}</h1>
              )
            })
          }
        </CardList>

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

