import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

class Header extends React.Component {
    render() {
        return (
          <div className="Header">   
            <header>
              <h3>MENU</h3>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/employees'>Employees</Link></li>
                <li><Link to='/benefits'>Benefits</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
              </ul>
            </nav>
          </header>
  

          </div>
        );
    }
}

export default Header;