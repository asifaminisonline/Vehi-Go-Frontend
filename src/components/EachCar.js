/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { showCar } from './CarsList';

const EachCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const getCar = async () => {
      const carData = await showCar(id);
      console.log('Fetched car:', carData);
      setCar(carData);
    };
    getCar();
  }, [id]);

  const buttonStyle = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: '0 auto',
    // maxWidth: '300px',
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  console.log('Rendered car:', car);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${car.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0,)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          zIndex: '1',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      />
      <div
        className="p-4 align-items-center justify-content-center"
        style={{
          backgroundColor: 'rgb(211,211,311,0.7)',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '5',
          minHeight: '600px',
          boxShadow: '0 0 7px 5px rgba(46, 46, 48, 0.61)',
        }}
      >
        <h4 className="text-center">{car.name}</h4>
        <div
          className="d-flex ms-3 mt-4"
          style={{ maxWidth: '1440px', gap: '30px' }}
        >
          <div style={{ maxWidth: '600px' }}>
            <img
              src={car.image}
              alt={car.name}
              className="img-fluid mt-5"
              style={{
                marginRight: '1rem',
                marginBottom: '1rem',
                boxShadow: '15px 20px 12px 3px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div className="p-4" style={{ maxWidth: '600px' }}>
            <p
              className="text-start ms-4"
              style={{
                color: 'grey',
                fontWeight: '',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {car.description}
            </p>
            <hr />
            <p className="text-center ms-4">
              You can rent this&nbsp;
              {car.name}
              &nbsp; for&nbsp;
              <b>
                <em>only</em>
                &nbsp; $
                {parseFloat(car.price).toFixed(2)}
                &nbsp; per day
              </b>
            </p>
            <div style={{ buttonStyle }}>
              <button
                type="button"
                style={{ width: '100%' }}
                className="btn btn-primary w-100 mt-5 text-center"
              >
                ADD TO FAVORITES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCar;
