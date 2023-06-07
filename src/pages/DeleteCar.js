import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, deleteCar } from '../redux/CarSlice';
import Load from '../components/Load';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  const load = useSelector((state) => state.car);
  useEffect(() => {
    dispatch(getCars()).then((response) => {
      setCars(response.payload);
    });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id)).then(() => {
      const updatedCars = cars.filter((car) => car.id !== id);
      setCars(updatedCars);
    });
  };
