import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import icon from '../../components/assets/img/icon.svg'
import Navbar from "../../components/navbar/Navbar";
import "./register.css"

function RegisterPage() {
  const [errors] = useState(false);
    const err_msg = "please supply all fields";
    
    const handleRegister = (e) => {
        e.preventDefault();
    }
    const flexed = {
        display:"flex",
        justifyContent:"center",
        gap: 10,
        padding: 15
    }

    return (
      <div>
        <Navbar />
        <div className='LoginRegisterForms'>
          <form onSubmit={handleRegister}>
              <img src={icon} alt=''/>
              <h1>Sign Up Here</h1>
              {errors && <p style={{color:"red"}}>{err_msg}</p>}
              <div className='grouped'>
                <input type='text' placeholder='firstname' name='fname' />
                <input type='text' placeholder='lastname' name='lname' />
              </div>
              <input type='text' placeholder='username' name='uname' />
              <input type='email' placeholder='email' name='email' />
              <div className='grouped'>
                <select name='gender'>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
                <input type='text' placeholder='nationality' name='nationality' />
              </div>
              <input type='text' placeholder='student number' name='student_no' />
              <input type='file' name='pp' accept='image/*'/>
              <div className='grouped'>
                <input type='password' placeholder='set password' name='pword1' />
                <input type='password' placeholder='verify password' name='pword2' />
              </div>
              <button>Register</button>
              <div style={flexed} className='div-new'>
                    <p>Already have an account ?</p>
                    <Link to={'/login'}>Login Now</Link>
              </div>
              <hr />
              <div style={flexed} className='links'>
                  <Link>Terms & conditons</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Security</Link>
              </div>
          </form>
      </div>
      </div>
      
    )
}

export default RegisterPage