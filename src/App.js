import React, { Component } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cards from './components/Cards';
import img1 from './assets/img1.png'


class App extends Component {

  // state = {
  //   Employees,
  //   Search
  // };
  constructor(props) {
    super(props)
    this.state = {
      filterText: "",
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  
  render() {
    
    return <>
    <Navbar />
      <div class="container-fluid"><div class="row">
        <div className="col-xl-2 p-4">
          <img className="card-img-top" id="port" src={img1} alt="tree" />
          <Search filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}/>
          </div>
        <div class="col-xl-10 p-4"><div class="row">
          <Cards data={this.props.data}
            filterText={this.state.filterText}/>
          {/* {this.state.Employees.filter(employee => employee.occupation === "Treeman").map(employeeTreeman => ( */} 
        </div></div>
      </div></div>
    
    </>

  }
}

      export default App;
