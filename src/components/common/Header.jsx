import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../../assets/img/icon.jpg"
import search from "../../assets/img/search.png"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img className="icon" src={icon} alt="" /> ASOMDWEE NTONTOMSOM DIASPORA
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="links" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="meet">
              Gatherings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="event">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="About">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="index">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links" to="Donate">
              Donate
            </Link>
          </li>
        </ul>

        
      </div>
    </div>
  </nav>
  )
}
