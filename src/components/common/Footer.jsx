import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
    <div className="footerContainer">
      <div className="socialIcons">
      <Link to="">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="">
          <i className="fa-brands fa-youtube"></i>
        </Link>
        <Link to="">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to="">
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>
      <div className="footerNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About Us </Link>
          </li>
          <li>
            <Link to="index">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2023; Property of
          Asomdwee Ntontomsom.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer