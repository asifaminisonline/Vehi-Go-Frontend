/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../redux/SingleCarSlice';
import { addFavorite } from '../redux/favoriteSlice';
import Loading from './Loading';

const CarDetails = () => {
  const { id } = useParams();
  console.log(id);
  const newDate = new Date().toISOString().split('T')[0];
  console.log(newDate);
  const user = localStorage.getItem('userId');
  const dispatch = useDispatch();
  // const { loading, car } = useSelector((state) => state.singleCar);
  const car = useSelector((state) => state.singleCar.car);
  const loading = useSelector((state) => state.singleCar.loading);
  const fData = {
    car_id: id,
    user_id: user,
    date: newDate,
  };
  const resData = {
    reservation: fData,
  };
  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFavorite(resData));
    toast.success('reserved successfully');
  };

  if (loading) {
    return <div className="flex justify-center min-h-[60vh] items-center"><Loading /></div>;
  }

  return (
    <div
      className=" details d-flex align-items-center justify-content-center"
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
        className=" ctn-show p-4 align-items-center shadow-lg justify-content-center"
        style={{

          backgroundColor: '#F7F5FA',
          marginTop: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60%',
        }}
      >

        <div
          className="d-flex showcar ms-3 mt-4"
          style={{ maxWidth: '1440px' }}
        >
          <div>
            <img
              src={car.image}
              alt={car.name}
              className="shadow-md"
              style={{
                marginRight: '1rem',
                marginBottom: '1rem',
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
          <div className=" ctn-words" style={{ maxWidth: '600px' }}>
            <h4 className=" uppercase">{car.name}</h4>
            <p
              className="text-start"
              style={{
                color: 'grey',
                fontWeight: '',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {car.description}
            </p>
            {/* <div className="bg-darkblue h-1 mx-2 mb-2" /> */}
            <div className="flex items-center justify-between gap-2">

              <span className="font-medium mx-0">
                Price: &nbsp;
                <b className="mx-0">
                  $
                  {parseFloat(car.price).toFixed(2)}
                  /day
                </b>
              </span>
              <button
                type="button"
                className=" rounded-full bg-orange  hover:bg-orangelt px-3 py-1 text-white"
                style={{ display: 'inline-block', width: 'fit-content' }}
                onClick={handleSubmit}
              >
                Favourite
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CarDetails;
