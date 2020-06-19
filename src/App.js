import React, { Component } from "react";
import CardList from "./components/CardList/CardList";
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
      <div>
        <CardList>
          {this.state.monsters.map(({ id, name }) => {
            return <h1 key={id}>{name}</h1>;
          })}
        </CardList>
      </div>
    );
  }
}

export default App;
