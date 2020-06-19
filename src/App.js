import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
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

  onSearchFieldChange = e => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(({ name, email }) => {
      return (
        name.toLowerCase().includes(searchField.toLowerCase()) ||
        email.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    return (
      <div className="App">
        <SearchBox
          onSearchFieldChange={this.onSearchFieldChange}
          placeholder="Search Monsters"
          value={searchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
