import React from 'react';
// import Navbar from '../components/Navbar';
import './styles/newCar.css';

const NewCar = () => {
  function handleChange(e) {
    const { name, value } = e.target;
    // Do something with the form data
    console.log(`Field '${name}' changed to '${value}'`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Do something with the form data, e.g. submit it to a server
  }

  return (
    <div className="page_container">
      {/* <Navbar /> */}
      <div className="newCar_container">
        <div className="inner-newCar">
          <div className="all-newCar">
            <form onSubmit={handleSubmit} className="new-car-form">
              <h2>Car Details</h2>

              <label htmlFor="image">
                Image URL:
                <input
                  type="text"
                  id="image"
                  name="image"
                  required
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="color">
                Color:
                <input
                  type="text"
                  id="color"
                  name="color"
                  required
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="description">
                Description:
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  maxLength="150"
                  required
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="price">
                Price:
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  onChange={handleChange}
                />
              </label>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
