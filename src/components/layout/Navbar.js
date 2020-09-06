import React from 'react';
import { Link } from 'react-router-dom';

import pokeball from '../../images/pokeball.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-container'>
          <img src={pokeball} alt={pokeball} />
          <Link to='/'>
            <h1>POKÉDEX</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
