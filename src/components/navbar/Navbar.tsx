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
            <Link to="/first-gen-hard">1° Gen (Hard)</Link>
          </li>
          <li>
            <Link to="/all-gen">All Gens</Link>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );

export default Navbar;