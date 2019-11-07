import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import LayoutStyle from "../styles/layout.module.css"

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <div className={LayoutStyle.content}>{props.children}</div>
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="https://js.hs-scripts.com/6685693.js"
        ></script>
      </Helmet>
    </React.Fragment>
  )
}

export default Layout
