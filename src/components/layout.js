import React from "react"
import Header from "./header"
import Footer from "./footer"
import LayoutStyle from "../styles/layout.module.css"

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <div className={LayoutStyle.content}>{props.children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
