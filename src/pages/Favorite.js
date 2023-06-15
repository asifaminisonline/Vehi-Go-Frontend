import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteCard from '../components/favoriteCard';
import { getFavorite } from '../redux/favoriteSlice';
import Loading from '../components/Loading';
import './styles/home.css';

const Favorite = () => {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorite(userId));
  }, [dispatch, userId]);

  const favouriteData = useSelector((state) => state.favorite);
  return (
    <div>
      {
       favouriteData.loading ? <div className="flex justify-center  min-h-[60vh] items-center"><Loading /></div>
         : (
           <div className=" scale-90">
             <h1 className="md:text-3xl text-base font-bold mb-4 text-green-600">My Reservation</h1>
             <div className="flex  ctn-favorite gap-3 overflow-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 my-scroll">
               {favouriteData.data[0] ? favouriteData.data.map(({
                 id, name, date, image, price,
               }) => (
                 <FavoriteCard
                   key={id}
                   name={name}
                   price={price}
                   date={date}
                   image={image}
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
