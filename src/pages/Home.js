import React, { useRef, useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import EachCarFeature from '../components/EachCar';
import { getCars } from '../redux/CarSlice';
import Loading from '../components/Loading';

const Homepage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const userefTarget = useRef();

  const next = () => {
    userefTarget.current.scrollLeft += 240;
  };

  const prev = () => {
    userefTarget.current.scrollLeft -= 240;
  };

  return (
    <div>
      {cars.loading ? (
        <div className="flex justify-center min-h-[60vh] items-center">
          <Loading />
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col justify-center items-center mb-5">
            <h1 className="md:text-2xl font-sans text-base font-bold text-green-600">
              Cars
            </h1>
            <hr className="md:w-28 w-16 md:border-2 border-1 border-green-600" />
          </div>
          <div className="w-full h-54 items-center relative">
            <button
              type="button"
              className="bg-green-400 hover:bg-green-500 text-lg p-1 absolute z-40 -right-7 top-28"
              onClick={prev}
            >
              <GrPrevious />
            </button>
            <button
              type="button"
              className="bg-green-400 hover:bg-green-500 text-lg p-1 absolute z-40 -right-7 top-28"
              onClick={next}
            >
              <GrNext />
            </button>
          </div>
          <div
            ref={userefTarget}
            className="flex items-center mx-2 md:scale-90 mt-2 gap-4 overflow-scroll scrollbar-none scroll-smooth scrollbar-hide transition-all"
          >
            {cars.data[0] &&
              cars.data.map((elem) => (
                <EachCarFeature
                  key={elem.id}
                  id={elem.id}
                  name={elem.name}
                  color={elem.color}
                  description={elem.description}
                  price={elem.price}
                  image={elem.image}
                  className="md:w-1/2"
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
