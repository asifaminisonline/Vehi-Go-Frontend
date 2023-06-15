import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, deleteCar } from '../redux/CarSlice';
import Loading from '../components/Loading';
import './styles/home.css';

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

  return (
    <div>
      {
     load.loading ? <div className="flex justify-center min-h-[60vh] items-center"><Loading /></div>
       : (
         <div className="ctn-del flex items-center justify-center">

           <div className="deletebox mx-3 flex px-2 gap-4 py-5 bg-light md:flex-row flex- overflow-auto drop-shadow-lg hover:drop-shadow-full shadow-lg my-scroll">
             {cars.map((cars) => (
               <div key={cars.id} className="mt-2 mx-auto mb-2 flex-col justify-center items-center">
                 <div className="h-52 w-56 md:h-48 md:w-52 mb-6 flex justify-center scale-90">
                   <img
                     src={cars.image}
                     alt=""
                     className="rounded-lg w-full h-full "
                   />
                 </div>
                 <div className="mt-2 mb-2 flex justify-between items-center">
                   <h2 className="text-base mx-2 font-bold">{cars.name}</h2>
                   <button
                     className="mx-2 bg-orange hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
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
       )
      }
    </div>
  );
};

export default DeleteCar;
