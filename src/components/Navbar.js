import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
 return (
<nav className="navbar">
<div className="navbar-logo">
<Link to="/">Travel India</Link>
</div>
<div className="navbar-links">
<button className="nav-button" onClick={() => alert('Language toggled')}>ENG/HIN</button> 
<Link to="/help" className="nav-button">Help?</Link>
<Link to="/signin" className="signin-button">Sign In</Link>
</div>
</nav>
);
};
export default Navbar;