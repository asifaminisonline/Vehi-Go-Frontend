import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginUser } from '../../redux/LoginSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    password: '',
  });

  const { name, password } = data;

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
          password: '',
        });
      } else {
        toast.error('Login failed');
      }
    }
  };

  return (

    <div className=" justify-content-center align-items-center login-div ">
      <div className="form-login p-3 rounded-3">
        <div className="container text-center px-5 mb-3 text-white">
          <h1>Sign In</h1>
          <p className=" mt-3">hello there! Sign in and start managing your system</p>
        </div>
        <div className=" ctn-form ">

          {/* <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2 form-floating ">
            <label
              htmlFor="name"
              className="form-control d-block"
            >
              Username
            </label>
            <input
              id="name"
              type="text"
              className="form-control d-block"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="form-control d-block"
            >
              Password
            </label>
            <input
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
              type="password"
              className="form-control d-block"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Login Now
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
        </form> */}

          <form className="text-white">

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="name"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email" className="form-label ">
                Email address
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <button className="btn btn-primary rounded-pill mt-3 px-3"> Sigin in</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
