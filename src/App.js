import React, { Component } from 'react';
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
        {
          this.state.monsters.map((item, index) => {
            return (
              <h1 key={item.id}>{item.name}</h1>
            )
          })
          // this.state.monsters.map(m => (
          //   <h1 key={index}>{m.name}</h1>
          // ))
        }
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

