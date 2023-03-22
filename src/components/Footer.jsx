import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <Link className="link" to={`/`}>home</Link>
        <a href="mailto:teresachrzan120100@gmail.com">mail</a>
    </footer>
  );
}

export default Footer;