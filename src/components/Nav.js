import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style';


class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link id="homeBtn" className="navbar-brand" to="/">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link id='exploreCities' to="/AllCities">Explore Cities</Link>
          </li>
          <li>
            {
             <Link id='profileBtn' to="/profile">Profile</Link> 
            }
          </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
          <li>
           {
              ( <button className="btn btn-info log" id='loginBtn' style={style.navButton} ><Link id='logoutBtn' to='/'>Log In</Link></button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;