import React, { Component } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cards from './components/Cards';
import img1 from './assets/img1.png'

import Employees from "./employees.js";


const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};



const EmployeeTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className="table table-striped table-dark">
      <thead className="thead-dark">
        <tr>
          <th scope="row">
            <span>Picture </span>
          </th>
          <th scope="row">
            <span>Name </span>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}>
              Sort
            </button>
          </th>
          <th scope="row">
            <span>Role </span>
            <button
              type="button"
              onClick={() => requestSort("occupation")}
              className={getClassNamesFor("occupation")}>
              Sort
            </button>
          </th>
          <th scope="row">
            <span>Email </span>
            <button
              type="button"
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}>
              Sort
            </button>
          </th>
          <th scope="row">
            <span>Phone Number </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img id="port" src={employee.image}></img>{" "}
            </td>
            <td>{employee.name}</td>
            <td>{employee.occupation}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div class="col-xl-12 p-4">
          <EmployeeTable products={Employees} />
        </div>
      </div>
    </>
  );
  }

     
          
     
          
           

    
    
    


  
   
  








// const useSortableData = (items, config = null) => {
//   const [sortConfig, setSortConfig] = React.useState(config);

//   const sortedItems = React.useMemo(() => {
//     let sortableItems = [...items];
//     if (sortConfig !== null) {
//       sortableItems.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === "ascending" ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === "ascending" ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableItems;
//   }, [items, sortConfig]);

//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === "ascending"
//     ) {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   return { items: sortedItems, requestSort, sortConfig };
// };

// const Cards1 = (props) => {
//   const { data, requestSort, sortConfig } = useSortableData(props.employees);
//   const getClassNamesFor = (name) => {
//     if (!sortConfig) {
//       return;
//     }
//     return sortConfig.key === name ? sortConfig.direction : undefined;
//   };
//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => requestSort("name")}
//         className={getClassNamesFor("name")}>
//         Name
//       </button>
//       {data.map((employee) => (
//         <div className="card bg-secondary m-3">
//           <div className="card-body">
//             <img
//               key={employee.id}
//               className="card-img-top"
//               alt={employee.name}
//               id="port"
//               src={employee.image}
//               alt={employee.name}
//             />
//             <h5 className="card-title text-center">{employee.name}</h5>
//             <p className="card-text">{employee.occupation}</p>
//             <p className="card-text">{employee.email}</p>
//             <p className="card-text">{employee.phone}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };







// class App extends Component {
//   // state = {
//   //   Employees,
//   //   Search
//   // };
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: "",
//     };
//   }

//   filterUpdate(value) {
//     this.setState({
//       filterText: value,
//     });
//   }

//   render() {
//     return (
//       <>
//         <Navbar />
//         <div class="container-fluid">
//           <div class="row">
//             <div className="col-xl-2 p-4">
//               <img className="card-img-top" id="port" src={img1} alt="tree" />
//               {/* <Search
//                 filterText={this.state.filterText}
//                 filterUpdate={this.filterUpdate.bind(this)}
//               /> */}
//               <small id="emailHelp" className="form-text text-muted">
//                 Click a button below to filter by role.
//               </small>
//               <TreemenBtn />
//               <TreeSpeakerBtn />
//               <WaterersBtn />
//             </div>
//             <div class="col-xl-10 p-4">
//               <div class="row">
//                    <Cards1 data={Employees} />
//                 {/* <Cards
//                   data={this.props.data}
//                   filterText={this.state.filterText}
//                 /> */}
//                 {/* {this.state.Employees.filter(employee => employee.occupation === "Treeman").map(employeeTreeman => ( */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

//       export default App;
