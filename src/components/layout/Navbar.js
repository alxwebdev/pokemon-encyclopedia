import React from 'react';

import pokeball from '../../images/pokeball.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-container'>
          <img src={pokeball} alt={pokeball} />
          <h1>POKÉDEX</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
