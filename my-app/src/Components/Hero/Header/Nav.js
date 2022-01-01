import React from 'react'
//import Links from './Links'
import { NavLink } from 'react-router-dom'
import './Nav.css'


export const Nav = () => {
    return (
        <>
          <ul>
              <li className="large">
                  <NavLink to="/premium" className="nav-links">Premium</NavLink>
              </li>
              <li className="large">
                  <NavLink to="/support" className="nav-links">Support</NavLink>
              </li>
              <li className="large download">
                  <NavLink to="/download" className="nav-links">Download</NavLink>
              </li>
              <li className="line"></li>
              <li className="signup">
                  <NavLink to="/signup" className="nav-links">Sign up</NavLink>
              </li>
              <li className="login">
                  <NavLink to="/login" className="nav-links">Log in</NavLink>
              </li>
              <li id="logo">Spotify</li>
          </ul>  
        </>
    )
}
