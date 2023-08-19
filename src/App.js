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
  const [carParkData, setCarParkData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      Promise.all([
        fetch('http://localhost:8080/getAvailableSpace/Shayona').then(response => response.json()),
        fetch('http://localhost:8080/getAvailableSpace/School').then(response => response.json()),
        fetch('http://localhost:8080/getAvailableSpace/Tennis%20Court').then(response => response.json())
      ])
      .then(data => {
        setCarParkData(data);
      });
    };

    fetchData();

    const intervalId = setInterval(fetchData, 3000); // Fetch data every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const carParks = carParkData.map((data, index) => ({
    name: index === 0 ? 'Shayona' : index === 1 ? 'Swaminarayan School' : 'Tennis Court',
    spaces: Array.from({ length: data }, (_, i) => ({
      id: i + 1,
      name: `Car Park ${index === 0 ? 'Shayona' : index === 1 ? 'Swaminarayan School' : 'Tennis Court'} - Space ${String.fromCharCode(65 + i)}`,
      available: true,
    })),
    showSpaces: data,
  }));

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
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
