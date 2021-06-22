import React from 'react'
import {Link } from 'react-router-dom'
import mainLogo from'../images/logo.png';

function Header() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
          </button>
              <li className="nav-item active">
              <a href={'http://125.19.52.219/plastic'} className="px-md-3 text-white">Home</a>
              <Link to="/view" className="px-md-3 text-white">View Registrations</Link>
              </li>
              
              
          </ul>
      </div>
      <div className="mx-auto order-0">
          <Link className="navbar-brand mx-auto" href="#"><img src={mainLogo}/></Link>
          
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          
      </div>
  </nav>
    
    
    )
}

export default Header
