import React, { Component } from "react"
import { Link } from "gatsby"
import HeaderStyle from "../styles/header.module.css"
import Logo from "../images/logo.svg"

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const linkClass = `nav-link ${HeaderStyle.link}`
    return (
      <header className={HeaderStyle.header}>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
          <div className="container">
            <Link className={linkClass} to="/">
              <img src={Logo} className={HeaderStyle.logo} alt="Home" />
              <span className={HeaderStyle.logoName}>BREW</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{ paddingRight: 25 }}>
                  <Link className={linkClass} to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item" style={{ paddingRight: 25 }}>
                  <Link className={linkClass} to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClass} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
