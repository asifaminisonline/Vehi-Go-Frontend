/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteCard from '../components/favoriteCard';
import { getFavorite } from '../redux/favoriteSlice';
import Loading from '../components/Loading';
import './styles/home.css';
import { getCars } from '../redux/CarSlice';

const Favorite = () => {
  const userId = localStorage.getItem('userId');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorite(userId));
    dispatch(getCars());
  }, [dispatch, userId]);
  const cars = useSelector((state) => state.car.data);

  const favouriteData = useSelector((state) => state.favorite.data);
  const result = favouriteData.map((obj2) => {
    const { car_id } = obj2;
    const carData = cars.find((obj1) => obj1.id === car_id);
    return {
      car_id: carData.id, name: carData.name, image: carData.image, price: carData.price,
    };
  });
  // Remove duplicates
  // eslint-disable-next-line max-len
  const uniqueResult = result.filter((car, index, self) => index === self.findIndex((c) => c.car_id === car.car_id));
  return (
    <div>
      {
       uniqueResult.loading ? <div className="flex justify-center  min-h-[60vh] items-center"><Loading /></div>
         : (
           <div className="container scale-90">
             <h1 className="md:text-3xl text-base font-bold mb-4 text-green-600">My Reservation</h1>
             <div className=" flex  ctn-favorite gap-3 overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 my-scroll">
               {uniqueResult[0] ? uniqueResult.map((item) => (

                 <FavoriteCard
                   key={uniqueResult.length}
                   name={item.name}
                   price={item.price}
                   image={item.image}
                 />

               ))
                 : <div><h2>No Reserved Tutor</h2></div>}
             </div>
           </div>
         )
      }
    </div>
  );
};

export default Favorite;
