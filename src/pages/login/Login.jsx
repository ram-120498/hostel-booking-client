import axios from "axios";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import icon from '../../components/assets/img/icon.svg'
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const flexed = {
    display:"flex",
    justifyContent:"center",
    gap: 10,
    padding: 15
}


  return (
    <div>
      <Navbar />
      <div>
       <div className="login">
          <div className="lContainer">
          <img className="img" src={icon} alt=''/>
          <h1 className="h1">Login In Here</h1>
              <input
                 type="text"
                 placeholder="username"
                 id="username"
                 onChange={handleChange}
                 className="lInput"
          />
               <input
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                  className="lInput"
            />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>

        <div style={flexed} className='div-new'>
                    <p>New here?</p>
                    <Link to={'/register'}>Sign Up Now</Link>
              </div>
              <hr />
              <div style={flexed} className='links'>
                  <Link>Terms & conditons</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Security</Link>
              </div>



        {error && <span>{error.message}</span>}
          </div>
      </div>
    </div>
  </div>
   
  );
};

export default Login;
