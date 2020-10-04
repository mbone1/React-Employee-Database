import React from "react";
import "../style.css";
import img1 from "../assets/img1.png";






function Search() {
  function handleClick(e) {
    e.preventDefault();
    console.log("pingus");
  }

  return (
    <div className="col-xl-2 p-4">
      <img className="card-img-top" id="port" src={img1} alt="tree" />
      <div className="form-group">
        <label htmlFor="searchName">Search by name</label>
        <input
          type="name"
          className="form-control"
          id="searchName"
          aria-describedby="searchName"
          placeholder="Paula Targus"
        />
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="btn btn-light mr-1 mt-1">
        All
      </button>
      <button type="button" className="btn btn-light mr-1 mt-1">
        Treemen
      </button>
      <button type="button" className="btn btn-light mr-1 mt-1">
        Waterers
      </button>
      <button type="button" className="btn btn-light mr-1 mt-1">
        Treespeakers
      </button>
      <small id="emailHelp" className="form-text text-muted">
        Click a button to filter by role.
      </small>
    </div>
  );
}

export default Search;