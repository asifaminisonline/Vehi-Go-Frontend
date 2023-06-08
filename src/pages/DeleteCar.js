import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCars, deleteCar } from '../redux/CarSlice';
import './styles/deleteCar.css';
// import Load from '../components/Loading';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  // const load = useSelector((state) => state.car);
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

  return (
    <div className="container ctn-delete">
      <div className="w-25">
        <h1 className="">
          Delete Car
        </h1>
        <hr className=" " />
        <div className="w-50">
          {cars.map((cars) => (
            <div key={cars.id} className="mt-2 mx-auto mb-2 d-flex justify-content-center items-center">
              <div className="img-car">
                <img
                  src={cars.image}
                  alt=""
                  className=""
                />
              </div>
              <div className="mt-2 mb-2 d-flex justify-content-between items-center">
                <h2 className="text-base mx-2 font-bold">{cars.name}</h2>
                <button
                  className=""
                  type="button"
                  onClick={() => handleDelete(cars.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteCar;
