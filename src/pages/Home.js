/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCars } from '../redux/CarSlice';

const CarsList = () => {
  const dispatch = useDispatch();
  const { data: cars } = useSelector((state) => state.car);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Dispaly cars based on the screen size
  const getNumCarsPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } if (window.innerWidth >= 768) {
      return 2;
    }
    return 1;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
       dispatch(getCars());
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  },

  [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(cars.length / getNumCarsPerPage()));
  }, [cars]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

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
    const numCarsPerPage = getNumCarsPerPage();
    const startIndex = currentIndex * numCarsPerPage;
    const endIndex = startIndex + numCarsPerPage;

    return cars.slice(startIndex, endIndex).map((car) => (
      <Link
        to={`/api/v1/cars/${car.id}`}
        key={car.id}
        className="d-flex flex-column border mb-4 justify-content-center align-items-center p-1"
        style={{
          minWidth: '350px',
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
            <span>
              $
              {parseFloat(car.price).toFixed(2)}
            </span>
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
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
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
        {currentPage}
        /
        {totalPages}
      </div>
    </div>
  );
};

export default CarsList;
