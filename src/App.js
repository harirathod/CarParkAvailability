import React, { useState } from 'react';
import './App.css';



// Create 150 spaces for Car Park 1
const carPark1Spaces = Array.from({ length: 150 }, (_, index) => ({
  id: index + 1,
  name: `Car Park Shayona - Space ${String.fromCharCode(65 + index)}`,
  available: true,
}));
const carPark2Spaces = Array.from({ length: 300 }, (_, index) => ({
  id: index + 1,
  name: `Car Park Swaminaryan School - Space ${String.fromCharCode(65 + index)}`,
  available: true,
}));


const App = () => {
  const [showCarPark1Spaces, setShowCarPark1Spaces] = useState(false);
  const [showCarPark2Spaces, setShowCarPark2Spaces] = useState(false);

  const toggleCarPark1Spaces = () => {
    setShowCarPark1Spaces(!showCarPark1Spaces);
    setShowCarPark2Spaces(false); // Close other car park spaces if open
  };

  const toggleCarPark2Spaces = () => {
    setShowCarPark2Spaces(!showCarPark2Spaces);
    setShowCarPark1Spaces(false); // Close other car park spaces if open
  };

  const countAvailableSpaces = (spaces) => {
    return spaces.filter(space => space.available).length;
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Car Park Availability</h1>
      </header>
      <main className="main">
        <div className="buttons">
          <button onClick={toggleCarPark1Spaces}>Car Park 1</button>
          <button onClick={toggleCarPark2Spaces}>Car Park 2</button>
        </div>
        <div className="spaces">
          {showCarPark1Spaces && (
            <div>Available spaces in Car Park Shayona: {countAvailableSpaces(carPark1Spaces)}</div>
          )}
          {showCarPark2Spaces && (
            <div>Available spaces in Car Park Swaminarayan School : {countAvailableSpaces(carPark2Spaces)}</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;

