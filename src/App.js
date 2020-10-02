import React, { Component } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cards from './components/Cards';
import Employees from './employees.js';


class App extends Component {

  state = {
    Employees
  };
  render() {
    return <div><Navbar />
      <div class="container-fluid"><div class="row"> <Search />
        <div class="col-xl-10 p-4"><div class="row">
          {this.state.Employees.map(employee => (

            <Cards
              id={employee.id}
              key={employee.keys}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              email={employee.email}
              phone={employee.phone}
            />
          ))}
        </div></div>
      </div></div>
    </div>

  }
}

      export default App;
