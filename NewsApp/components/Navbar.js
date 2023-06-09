import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  return (
    
  <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark border-bottom border-bottom-dark sticky-top" data-bs-theme="dark">
  <div className="container-fluid justify-content-center">
    <Link className="navbar-brand"  to="/"> <Link to="/" class="pull-left"/><img style={{width:"10rem"}} src="main.png"/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <NavLink className="nav-link " id='link1' aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown" >
          <NavLink className="nav-link dropdown-toggle" to=".dropdown-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" id='link1' to="/sports">Sports</NavLink></li>
            <li><NavLink className="dropdown-item" id='link1' to="/business">Businees</NavLink></li>
            <li><NavLink className="dropdown-item" id='link1' to="/technology">Technology</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " id='link1' aria-current="page" to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " id='link1' aria-current="page" to="/source">Sources</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " id='link1' aria-current="page" to="/about">About</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar