import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <span className="logo">MAKERERE HOSTEL BOOKING APPLICATION</span>
        </Link>
        <div className="navItems">
            <Link to="/login">
              <button className="navLog">Log In</button>
            </Link>
            <Link to='/register'>
              <button className="navSign">Sign Up</button>
            </Link>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar