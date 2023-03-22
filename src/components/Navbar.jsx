import React from 'react';
import logo from '../img/blog-logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div class="logo">
          <Link to={'/'}>
          <img src={logo} alt="Logo Blog" />
          </Link>
          <p>Blog Tantros</p>
        </div>
        <div class="login">
          <button class="logIn" id="logIn"><Link className="link" to={`/login`} >Zaloguj się</Link></button> 
        </div>
    </nav>
  );
}

export default Navbar;