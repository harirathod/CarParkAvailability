import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setAvailableSpaces] = useState([]);

  useEffect(() => {
    // Replace with your Spring Boot backend URL
    const apiUrl = 'http://localhost:8080/getAvailableSpaces/School';

    axios.get(apiUrl)
      .then(response => {
        setAvailableSpaces(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;