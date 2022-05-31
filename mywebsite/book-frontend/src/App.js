import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Book from "./Component/Book/index";
import { BasicTable } from './Component/BasicTable';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Book />}></Route>
          <Route path="/table" element={<BasicTable />}></Route>
        </Routes>
      </BrowserRouter>
    
    );
  }
}

export default App;