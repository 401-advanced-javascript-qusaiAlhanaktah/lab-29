/* eslint-disable no-unused-vars */
import React from 'react';
import {Link , NavLink} from 'react-router-dom';
function Header (){
  return(
    <header>
      <h1>
        RESTy
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <NavLink to='/Histoy'>Histoy</NavLink>
          </li>
        </ul>
      </nav>
    </header>

  );
}
export default Header;