import React, { Component } from "react";
import "../style.css";

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val)
  }

  render() {
  
    return (
      <div className="form-group">
        <label htmlFor="searchName">Filter by name</label>
        <input
          type="name"
          ref={(value) => {
            this.myValue = value;
          }}
          className="form-control"
          id="searchName"
          aria-describedby="searchName"
          placeholder="Begin typing to filter"
          onChange={this.filterUpdate.bind(this)}
        />
      </div>
    );
  }
}

export default Search;
