import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getProfile} from './AuthService';
import { login, logout, isLoggedIn } from './AuthService';
import style from './style';


class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: getProfile()
    }
  }

  handleLogOut(){
    this.setState({
    })
  }
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
             ( isLoggedIn() ) ? <Link id='profileBtn' to="/profile">Profile</Link> :  ''
            }
          </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button id='logoutBtn' className="btn btn-danger log" style={style.navButton} onClick={ () => logout()}>Log out </button> )
             : ( <button className="btn btn-info log" id='loginBtn' style={style.navButton} onClick={()=>login()}><Link id='logoutBtn' to='/'>Log In</Link></button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;