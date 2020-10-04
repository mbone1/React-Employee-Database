import React, { Component } from "react";
import "../style.css";

class Cards extends Component {
  render() {
    const { data, filterText } = this.props;
    const Cards = data
      .filter((name) => {
        //remove names that do not match current filter text
        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
      })
      .map((employee) => {
        return (
          <div className="card bg-secondary m-3">
            <div className="card-body">
                    <img
                        key={employee.id}
                className="card-img-top"
                alt={employee.name}
                id="port"
                src={employee.image}
                alt={employee.name}
              />
              <h5 className="card-title text-center">{employee.name}</h5>
              <p className="card-text">{employee.occupation}</p>
              <p className="card-text">{employee.email}</p>
              <p className="card-text">{employee.phone}</p>
            </div>
          </div>
        );
      });
    return <>{Cards}</>;
  }
}

export default Cards;
