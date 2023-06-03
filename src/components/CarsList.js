/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import Url from '../api/api';

export const showCar = async (id) => {
  try {
    const response = await axios.get(`${Url}/api/v1/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car:', error);
    return null;
  }
};

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const renderCars = () => {
    const startIndex = currentIndex * 3;
    const endIndex = startIndex + 3;

    return cars.slice(startIndex, endIndex).map((car) => (
      <div
        key={car.id}
        className="d-flex flex-column border mb-4 justify-content-center align-items-center p-1"
        style={{ minWidth: '250px', maxWidth: '550px', margin: '0 auto' }}
      >
        <img src={car.image} alt={car.name} className="img-fluid" />
        <div>
          <div>
            <p>
              <h5>{car.name}</h5>
            </p>
          </div>
          <div>
            <span>${parseFloat(car.price).toFixed(2)}</span>
          </div>
        </div>
      </div>
    ));
  };

  const showRightArrow = currentIndex < Math.floor(cars.length / 3);

  return (
    <div>
      <div className="text-center mx-auto" style={{ maxWidth: '768px' }}>
        <h1 className="md:text-2xl font-sans text-base font-bold text-green-600">
          Cars
        </h1>
        <hr className="md:w-28 w-16 md:border-2 border-1 border-green-600" />
      </div>

      <div className="flex items-center justify-between mx-2 p-5 md:scale-90 mt-2 gap-4" style={{ maxWidth: '100vw', display: 'flex' }}>
      <div className="d-flex flex-column justify-content-center"><FaChevronLeft onClick={handlePrevClick} size={24} /></div>
        {renderCars()}
       <div className="d-flex flex-column justify-content-center"> {showRightArrow && <FaChevronRight onClick={handleNextClick} size={24} />}</div>
      </div>
    </div>
  );
};

export default CarsList;
