import './Navbar.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  
  const user=true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>SiyasiEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
       {user ? (
        <div className='user'>
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         alt="" />
         <span>John Doe</span>
         <Link to="/profile" className='profile'>
           <div className='notification'>3</div>
           <span>Profile</span>
         </Link>
        </div>
       ):(   //if it is not signed in then down wala or else upper wala 
        <>
         <Link to="/signin">Sign in</Link>
         <Link to="/signup" className="register">Sign up</Link>
        </>
       )}
        <div className="menuicon">
          <img src="./menu.png" alt="Menu" onClick={() => setOpen(prev => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
