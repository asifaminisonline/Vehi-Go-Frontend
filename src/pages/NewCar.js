/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { createCar } from '../redux/CarSlice';
import './styles/newCar.css';

const NewCar = () => {
  const [inputData, setInputData] = useState({
    name: '',
    image: '',
    color: '',
    description: '',
    price: 0,
  });

  const dispatch = useDispatch();

  const {
    name, image, color, description, price,
  } = inputData;

  const inputEventHandler = (event) => {
    const { name, value } = event.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    if (!name || !price || !color || !description || !image) {
      toast.error('Fields should not be empty');
    }
    dispatch(createCar(inputData));
    toast.success('car added successfully');
    setInputData({
      name: '',
      image: '',
      color: '',
      description: '',
      price: 0,
    });
  };

  return (
    <div className=" newcar flex items-center gap-5 container" style={{ height: '90vh', width: '80%' }}>
      <div className="img-form rounded-2xl" />
      <div className="formCtn flex flex-col px-3 ">
        <h2 className=" ">Add Your car</h2>
        <p>Become a member of vehigo and make somes few bucks with your car </p>
        <form onSubmit={submitEventHandler} className=" w-100">
          <div className="flex flex-row gap-3">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                name="name"
                value={name}
                onChange={inputEventHandler}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                name="image"
                value={image}
                onChange={inputEventHandler}
                type="text"
                id="Image"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
          </div>
          <div className="flex flex-row gap-3">

            <div className="mb-6">
              <label
                htmlFor="color"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                color
              </label>
              <input
                type="text"
                id="specaility"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                name="color"
                value={color}
                onChange={inputEventHandler}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                min={0}
                name="price"
                value={price}
                onChange={inputEventHandler}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              description
            </label>
            <textarea
              type="text"
              id="username"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              name="description"
              value={description}
              onChange={inputEventHandler}
            />
          </div>

          <button
            type="submit"
            className=" flex text-white bg-orange hover:bg-orangelt focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  rounded-full text-sm px-5 py-2.5 text-center justify-center"
          >
            Create car
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCar;
