import './App.css';
import Header from "./components/Header"
import React, { useState, useEffect } from 'react';

const OMDB_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ec3fec87";

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
