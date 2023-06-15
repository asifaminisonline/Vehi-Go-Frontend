/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteCard = ({
  name,
  image,
  price,
}) => (
  <div className="flex flex-col justify-center p-3 min-h-[260px] min-w-[220px]  p-1 bg-white border border-gray-200 drop-shadow-full hover:shadow-lg rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 scale-100">
    <Link to="/" className="no-underline">
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
        <button type="button" className="flex text-white bg-orange hover:bg-orangelt  font-medium  rounded-full text-sm px-5 py-2.5 text-center justify-center"> Delete</button>
      </div>
    </Link>
  </div>
);

export default FavoriteCard;
