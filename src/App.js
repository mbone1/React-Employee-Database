import React, { Component } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Cards from './components/Cards';



function App() {

  return <div><Navbar />
    <div class="container-fluid"><div class="row"> <Search />
      <div class="col-xl-10 p-4"><div class="row">
        <Cards />
      </div></div>
    </div></div>
  </div>

      }

      export default App;
