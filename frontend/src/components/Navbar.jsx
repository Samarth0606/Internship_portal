import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext);
  const { isAuthenticated, user } = authState;
console.log(isAuthenticated , "isauth")
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      <div className="navbar-links">
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              <button onClick={handleLogout} className="navbar-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-button">Login</Link>
              <Link to="/register" className="navbar-button">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

