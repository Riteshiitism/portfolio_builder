import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('userid'); 
    if (user) {
      setAlreadyLoggedIn(true);
    }
  }, []);

  const signout = () => {
    localStorage.removeItem('userid');
    setAlreadyLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>PortFolio</h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        {alreadyLoggedIn ? (
          <>
            <li><Link to="/create">New Portfolio</Link></li>
            <li><Link to="/portfolios">Portfolios</Link></li>
            <li>
              <button onClick={signout} className="signout-button">Sign Out</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;