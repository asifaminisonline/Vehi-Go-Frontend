/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get(`${Url}/api/v1/cars`);
        setCars(response.data);
        setTotalPages(Math.ceil(response.data.length / 3));
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    getCars();
  }, []);

  // Display current page and number of pages
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handle pagination arrows
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // onClick handling two functions at the same time
  const handlePrevious = () => {
    handlePrevClick();
    handlePreviousPage();
  };

  const handleNext = () => {
    handleNextClick();
    handleNextPage();
  };

  const renderCars = () => {
    const startIndex = currentIndex * 3;
    const endIndex = startIndex + 3;

    return cars.slice(startIndex, endIndex).map((car) => (
      <Link
        to={`/cars/${car.id}`}
        key={car.id}
        className="d-flex flex-column border mb-4 justify-content-center align-items-center p-1"
        style={{
          minWidth: '250px',
          maxWidth: '550px',
          margin: '0 auto',
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <img src={car.image} alt={car.name} className="img-fluid mb-2 " />
        <div>
          <div className="text-center">
            <p>
              <b>{car.name}</b>
            </p>
          </div>
          <div className="text-center">
            <span>${parseFloat(car.price).toFixed(2)}</span>
            <em>
              <b>&nbsp;per day</b>
            </em>
          </div>
        </div>
      </Link>
    ));
  };

  // const showRightArrow = currentIndex < Math.floor(cars.length / 3);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh', }}>
      <div className="text-center mx-auto" style={{ maxWidth: '900px' }}>
        <h1 className="md:text-2xl font-sans text-base font-bold text-green-600">
          Cars
        </h1>
        <hr className="md:w-28 w-16 md:border-2 border-1 border-green-600" />
      </div>

      <div
        className="flex items-center justify-between mx-2 p-5 md:scale-90 mt-2 gap-4"
        style={{ maxWidth: '100vw', display: 'flex' }}
      >
        <div className="d-flex flex-column justify-content-center">
          {currentPage > 1 && (
            <FaChevronLeft
              onClick={handlePrevious}
              size={24}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        {renderCars()}
        <div className="d-flex flex-column justify-content-center">
          {' '}
          {currentPage < totalPages && (
            <FaChevronRight
              onClick={handleNext}
              size={24}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
      <div className="text-center mt-2">
        {currentPage}/{totalPages}
      </div>
    </div>
  );
};

export default CarsList;
