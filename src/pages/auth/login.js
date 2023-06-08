/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginUser } from '../../redux/loginSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = data;

  const userData = {
    user: data,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || password === '') {
      toast.error('Please fill all the fields.');
    } else {
      const response = await dispatch(loginUser(userData));
      if (response.type === 'login/loginUser/fulfilled') {
        toast.success('logged in successfully');
        navigate('/');
        setData({
          name: '',
          email: '',
          password: '',
        });
      } else {
        toast.error('Login failed');
      }
    }
  };

  return (

    <div className=" justify-content-center align-items-center login-div ">
      <div className="form-login p-3 rounded-3 mx-5">
        <div className="container text-center px-5 mb-3 text-white">
          <h1>Sign In</h1>
          <p className=" mt-3">hello there! Sign in and start managing your system</p>
        </div>
        <div className=" ctn-form  text-white">
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm mb-2"
              >
                Username
              </label>
              <input
                id="name"
                type="text"
                className="form-control rounded-pill"
                name="name"
                value={name}
                onChange={handleChange}

              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control rounded-pill"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                name="password"
                value={password}
                onChange={handleChange}
                id="password"
                type="password"
                className="form-control rounded-pill"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-primary mt-3"
              >
                <Link to="/cars"> Login Now </Link>

              </button>
            </div>
            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              Dont have an account?
              <Link
                to="/register"
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register here
              </Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
