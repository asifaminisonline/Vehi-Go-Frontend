import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (

  <div className="banner flex  w-100 ">

    <div className="img-ca px-3">
      <h1 className="mb-3 uppercase"> Rent your car by an easiest way </h1>
      <h4 className="w-80 mb-3 font-light text-lg">100 luxury cars from multi brand are needed for rent</h4>
      <Link to="/cars/new" className="text-white">
        <button type="submit" className="rounded-full bg-orange px-3 py-2">Register now</button>
        {' '}
      </Link>
    </div>

    <div className="img-banner" />

  </div>
);

export default Banner;
