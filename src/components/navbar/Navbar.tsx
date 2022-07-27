import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';

const Navbar = () => (
    <nav className="navigation">
      {/* <div className="navigation-menu"> */}
        <ul>
          <li>
            <Link to="/">1° Gen (Easy)</Link>
          </li>
          <li>
            <Link to="/hard">1° Gen (Hard)</Link>
          </li>
          <li>
            <Link style={{ pointerEvents: 'none', color: '#b9b6b6' }} to="/all">All Gens</Link>
          </li>
          <li>
            <Link style={{ pointerEvents: 'none', color: '#b9b6b6' }} to="/battle">Battle</Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );

export default Navbar;