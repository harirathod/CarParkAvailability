import React, { useState, useEffect } from 'react';
import './App.css';

import backgroundImage from './MandirLDN.jpeg';

const CarPark = ({ name, spaces, showSpaces }) => {
  const availableSpaces = spaces.filter(space => space.available).length;

  return (
    <div className="car-park-card">
      <div className="card-header">
        {name}
      </div>
      {showSpaces && (
        <div className="available-spaces">
          Available spaces: {availableSpaces}
        </div>
      )}
    </div>
  );
};

const CarParkBox = ({ carPark }) => {
  return (
    <div className="car-park-box">
      <CarPark
        name={carPark.name}
        spaces={carPark.spaces}
        showSpaces={carPark.showSpaces}
      />
    </div>
  );
};

const App = () => {
  const [showCarPark1Spaces, setShowCarPark1Spaces] = useState(0);
  const [showCarPark2Spaces, setShowCarPark2Spaces] = useState(0);
  const [showCarPark3Spaces, setShowCarPark3Spaces] = useState(0);

  useEffect(() => {
    // Simple GET request using fetch
    fetch('http://localhost:8080/getAvailableSpace/School')
        .then(response => response.json())
        .then(data => {
          return setShowCarPark2Spaces(() => data)
        });

    fetch('http://localhost:8080/getAvailableSpace/Tennis%20Court')
      .then(response => response.json())
      .then(data => {
        return setShowCarPark3Spaces(() => data)
      });

    fetch('http://localhost:8080/getAvailableSpace/Shayona')
      .then(response => response.json())
      .then(data => {
        return setShowCarPark1Spaces(() => data)
      });
      
    }, [])

  const carPark1Spaces = Array.from({ length: showCarPark1Spaces }, (_, index) => ({
    id: index + 1,
    name: `Car Park Shayona - Space ${String.fromCharCode(65 + index)}`,
    available: true,
  }));

  const carPark2Spaces = Array.from({ length: showCarPark2Spaces }, (_, index) => ({
    id: index + 1,
    name: `Car Park Swaminarayan School - Space ${String.fromCharCode(65 + index)}`,
    available: true,
  }));

  const carPark3Spaces = Array.from({ length: showCarPark3Spaces }, (_, index) => ({
    id: index + 1,
    name: `Car Park Tennis Court - Space ${String.fromCharCode(65 + index)}`,
    available: true,
  }));

  const carParks = [
    {
      name: 'Shayona',
      spaces: carPark1Spaces,
      showSpaces: showCarPark1Spaces,
    },
    {
      name: 'Swaminarayan School',
      spaces: carPark2Spaces,
      showSpaces: showCarPark2Spaces,
    },
    {
      name: 'Tennis Court',
      spaces: carPark3Spaces,
      showSpaces: showCarPark3Spaces,
    },
  ];

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Fill the whole screen vertically
  };

  return (
    <div className="App" style={appStyle}>
      <header className="header">
        <h1>Car Park Availability</h1>
      </header>
      <main className="main">
        <div className="car-park-boxes">
          {carParks.map(carPark => (
            <CarParkBox key={carPark.name} carPark={carPark} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
