/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteCard = ({
  name,
  image,
  price,
}) => (
  <div className="flex flex-col justify-center  min-h-[260px] min-w-[220px]  p-1 bg-white border border-gray-200 drop-shadow-full hover:shadow-lg rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 scale-100">
    <Link to="/">
      <div className=" img-fav h-48 w-[13rem] flex justify-center">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="bg-gray-300">
        <p className="mx-2 text-green-600 mt-3 font-bold text-lg capitalize">
          {name}
        </p>
        <p className="mx-2 text-slate-400 font-medium text-sm">
          $
          {price}
        </p>
      </div>
    </Link>
  </div>
);

export default FavoriteCard;