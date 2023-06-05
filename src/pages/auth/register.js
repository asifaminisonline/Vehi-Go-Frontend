/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { registerUser } from '../../redux/RegistrationSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const {
    name, email, password, cpassword,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || cpassword === '') {
      toast.error('Please fill all the fields');
      return;
    }
    if (password !== cpassword) {
      toast.error('Password does not match');
      return;
    }
    const finalData = {
      user: {
        name,
        email,
        password,
      },
    };

    dispatch(registerUser(finalData));
    toast.success("You're registered successfully");
    navigate('/login');
    setData({
      name: '',
      email: '',
      password: '',
      cpassword: '',
    });
  };
  return (

    <div className="justify-content-center align-items-center regis-div">
      <div className="form-login p-3 rounded-3 col-sm-6 ">
        <div>
          <h3 className="text-center text-white">
            Registration form
          </h3>
        </div>

        <div className="ctn-form">
          <form className="mt-6 text-white" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className=" text-sm "
              >
                Username
              </label>
              <input
                id="name"
                type="text"
                className=" w-full px-4 py-2 mt-2 form-control rounded-pill"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="name"
                className="text-sm
              "
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mb-2 w-full px-4 py-2  form-control rounded-pill"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className=" text-sm"
              >
                Password
              </label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                id="password"
                type="password"
                className=" px-4 py-2 mt-2 form-control rounded-pill"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="cpassword"
                className="text-sm"
              >
                Confirm Password
              </label>
              <input
                name="cpassword"
                value={cpassword}
                onChange={handleChange}
                id="cpassword"
                type="password"
                className=" w-full px-4 py-2 mt-2 form-control rounded-pill"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="mt-2 px-4 py-2 tracking-wide text-white btn btn-primary"
              >
                Register Now
              </button>
            </div>
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              You have an account?
              <Link
                to="/login"
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>

      </div>

    </div>

  );
};

export default Register;
