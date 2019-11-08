import React, { Component } from "react"
import { Link } from "gatsby"
import HeaderStyle from "../styles/header.module.css"
import Logo from "../images/logo.svg"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const collapsed = this.state.collapsed
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show"
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right"

    const linkClass = `nav-link ${HeaderStyle.link}`
    const navClass = `navbar navbar-expand-lg fixed-top navbar-dark bg-dark ${HeaderStyle.navBar}`
    const loginStyle = `nav-item ${HeaderStyle.loginButton}`
    const loginText = `nav-link ${HeaderStyle.link} ${HeaderStyle.loginText}`
    return (
      <header className={HeaderStyle.header}>
        <nav className={navClass}>
          <div className="container">
            <Link className={`${linkClass} active`} to="/">
              <img src={Logo} className={HeaderStyle.logo} alt="Home" />
              <span className={HeaderStyle.logoName}>BREW</span>
            </Link>
            <button
              className={`navbar-toggler ${classTwo}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${classOne}`}
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{ paddingRight: 25 }}>
                  <Link className={linkClass} to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item" style={{ paddingRight: 25 }}>
                  <Link className={linkClass} to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item" style={{ paddingRight: 25 }}>
                  <Link className={linkClass} to="/contact">
                    Contact
                  </Link>
                </li>
                <li className={loginStyle}>
                  <Link className={loginText} to="/login">
                    Log In
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
