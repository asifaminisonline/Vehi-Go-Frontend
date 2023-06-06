import { useState } from "react";
// import Navbar from '../components/Navbar';
import "./styles/newCar.css";

const IMAGE_REGEX = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;

const NewCar = () => {
  const [carData, setCarData] = useState({
    name: "",
    color: "",
    price: "",
    description: "",
    image: "",
    created_at: "",
    updated_at: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!IMAGE_REGEX.test(carData.image)) {
      alert("invaild image url");
    }
    // Do something with the carData, e.g. submit it to a server
  }

  return (
    <div className="page_container">
      {/* <Navbar /> */}
      <div className="newCar_container">
        <div className="inner-newCar">
          <div className="all-newCar">
            <form onSubmit={handleSubmit} className="new-car-form">
              <h2>Car Details</h2>

              <label htmlFor="image-url">
                Image URL:
                <input
                  type="text"
                  id="image-url"
                  name="image-url"
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

              <input type="submit" value="Add Car" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
