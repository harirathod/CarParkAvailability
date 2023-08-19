import React from 'react';
import './ParkingSpace.css';

const ParkingSpace = ({ space }) => {
  return (
    <div className={`parking-space ${space.available ? 'available' : 'occupied'}`}>
      <span>{space.name}</span>
      <span>{space.available ? 'Available' : 'Occupied'}</span>
    </div>
  );
};

export default ParkingSpace;
