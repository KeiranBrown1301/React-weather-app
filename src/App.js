import './App.css';
import React, { useEffect, useState } from 'react'

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
    </div>
  );
}

export default App;
