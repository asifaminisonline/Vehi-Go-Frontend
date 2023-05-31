import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../redux/CarSlice';

const Homepage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div>
      {
        cars.loading ? <div className="flex justify-center min-h-[60vh] items-center">Car List</div>
          : (
            <div className="">
              <div className="flex flex-col justify-center items-center mb-5">
                <h1 className="md:text-2xl font-sans text-base font-bold text-green-600">Cars</h1>
                <hr className="md:w-28 w-16 md:border-2 border-1 border-green-600" />
              </div>
              <div className="w-full h-54 items-center relative">
                <button type="button" className="bg-green-400 hover:bg-green-500 text-lg p-1 absolute z-40 -right-7 top-28">Previous</button>
                <button type="button" className="bg-green-400 hover:bg-green-500 text-lg p-1 absolute z-40 -right-7 top-28">Next</button>
              </div>
              <div ref className="flex items-center mx-2 md:scale-90 mt-2 gap-4 overflow-scroll scrollbar-none scroll-smooth scrollbar-hide transition-all">
                {/* {cars.data[0]
          && cars.data.map((elem) => (??))
                  } */}
              </div>
            </div>
          )
      }
    </div>
  );
};

export default Homepage;
