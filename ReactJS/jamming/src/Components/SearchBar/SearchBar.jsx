import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  search = () => {
    this.props.onSearch(this.state.term);
  };

  handleTermChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button onClick={this.search} className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
