import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Create Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
