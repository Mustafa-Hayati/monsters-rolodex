import React, { Component } from "react";
import CardList from "./components/CardList";
class App extends Component {
  state = {
    monsters: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();
    this.setState({
      monsters: users,
    });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
