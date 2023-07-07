/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdMotionPhotosAuto, MdOutlineOilBarrel } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCars } from '../redux/CarSlice';
import Banner from '../components/banner';
import './styles/home.css';

const CarsList = () => {
  const dispatch = useDispatch();
  const { data: cars } = useSelector((state) => state.car);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Dispaly cars based on the screen size
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

  const getNumCarsPerPage = () => {
    if (isDesktop) {
      return 3;
    } if (isTablet) {
      return 2;
    } else if (isMobile) {
    return 1;
  }
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
        to={`/cars/${car.id}`}
        key={car.id}
        className="d-flex flex-column border mb-4 justify-content-center  p-1 pb-5"
        style={{
          maxWidth: '550px',
          margin: '0 auto',
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <div className="w-100 car">

        <img src={car.image} alt={car.name} className="w-100 mb-2 h-48" />
        </div>
       
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between items-center p-2 w-100 ">
            <p className="mb-0">
              <b>{car.name}</b>
            </p>
            <b className="text-orange">
              $
              {parseFloat(car.price).toFixed(2)}
              /Day
            </b>
          
          </div>
          <div className="flex justify-between w-100">
            <div className="flex px-2 "> 
            <MdMotionPhotosAuto  size={24} style={{ cursor: 'pointer', color:'#060b26' }} />
            <span className="font-medium mx-1">Automatic</span>
            </div>

            <div className="flex px-2 "> 
            <MdOutlineOilBarrel  size={24} style={{ cursor: 'pointer', color:'#060b26' }} />
            <span className="font-medium mx-1">Diesel</span>
            </div>
           
          </div>
        </div>
      </Link>
    ));
  };
  const sytleCtn = {
    paddingTop: '4rem',
    height: '100vh',
    gap: '1rem'
  };

  // const showRightArrow = currentIndex < Math.floor(cars.length / 3);

  return (
    <div className="d-flex flex-column align-items-center home-div container" style={sytleCtn}>
      <Banner />
      <div className="text-center mx-auto">
        <h1 className="md:text-2xl font-sans text-base font-bold text-green-600">
          Features Cars
        </h1>
        <h4 className=" font-light text-feature text-center ">You may fall in love, we got your taste  </h4>
        <div className=" mx-auto mt-3 w-24 h-1.5 text-center bg-orange" />
      </div>

      <div
        className="container flex items-center justify-between mt-2 p-3 gap-2"
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
