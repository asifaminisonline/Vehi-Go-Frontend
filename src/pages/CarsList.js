/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Url from '../api/api';

const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get(`${Url}/api/v1/cars`);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    getCars();
  }, []);

  return (
    <div>
      <div className="text-center mx-auto" style={{ maxWidth: '768px' }}>
        <h1 className="md:text-2xl font-sans text-base font-bold text-green-600">
          Cars
        </h1>
        <hr className="md:w-28 w-16 md:border-2 border-1 border-green-600" />
      </div>
      <div className="flex items-center mx-2 p-5 md:scale-90 mt-2 gap-4 overflow-scroll scroll-smooth">
        {cars.map((car) => (
          <div
            key={car.id}
            className="d-flex flex-column border mb-4 justify-content-center align-items-center p-1"
          >
            <img src={car.image} alt={car.name} className="img-fluid" />
            <div className="">
              <div className="">
                <p>
                  <h5>{car.name}</h5>
                </p>
              </div>
              <div className="">
                <span>${parseFloat(car.price).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsList;
