import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand fw-bold fs-3" href="#">{props.titel}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li> */}
        </ul>

        <div className="form-check form-switch mx-3"> 
           <input className="form-check-input" type="checkbox" role="switch" onClick={props.changemode} id="flexSwitchCheckDefault"/> 
           <label className= {`form-check-label text-${props.mode === 'light'? 'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">Dark Mode</label> 
        </div>        
      </div>
    </div>
  </nav>
  )
}

Navbar.prototypes = {titel: PropTypes.string,}
Navbar.defaultProps = {
    titel : 'titel goes here',
}
