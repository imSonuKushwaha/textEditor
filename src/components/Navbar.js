import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
              <button type="button" onClick={props.changeColorBlue} className="btn btn-primary">Blue</button>
            </li>
            <li className="nav-item mx-1">
              <button type="button" onClick={props.changeColorGreen} className="btn btn-success">Green</button>
            </li>
            <li className="nav-item mx-1">
              <button type="button" onClick={props.changeColorYellow} className="btn btn-warning">Yellow</button>
            </li>
        </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'} ms-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
    title: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "titleHere"
}
