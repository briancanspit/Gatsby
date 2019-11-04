import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Layout from "../components/layout"
import MainContent from "../components/content/indexPage"

const IndexPage = () => {
  return (
    <Layout>
      <MainContent />
    </Layout>
  )
}

export default IndexPage

/*
<nav className={navClass}>
          <div className="container">
            <Link className={`${linkClass} active`} to="/">
              <img src={Logo} className={HeaderStyle.logo} alt="Home" />
              <span className={HeaderStyle.logoName}>BREW</span>
            </Link>
          </div>
        </nav>



import { NavDropdown, Navbar, Nav } from "react-bootstrap"
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
          Action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">
          Something
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

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
*/
