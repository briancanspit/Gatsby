import React, { Component } from "react"
import Typist from "react-typist"
import Style from "./styles/index.module.css"
import CoffeeImg from "../../images/coffee.svg"
import "../../../node_modules/react-typist/dist/Typist.css"

const Content = () => {
  let leftStyles = `col-md-6 ${Style.left}`
  return (
    <div className="container-fluid fade-in-right">
      <div className="row">
        <div className={leftStyles}></div>
        <div className="col-md-6">
          <img className={Style.coffeeImg} src={CoffeeImg} alt="Coffee Cup" />
        </div>
      </div>
    </div>
  )
}

const Loader = () => {
  return (
    <React.Fragment>
      <div className={Style.typer}>
        <Typist avgTypingDelay={40} startDelay={500}>
          <h1 className={Style.mainHeader}>Here's the thing.</h1>
          <Typist.Backspace count={40} delay={250} />
          <h1 className={Style.mainHeader}>Everybody loves coffee.</h1>
          <Typist.Backspace count={40} delay={250} />
          <h1 className={Style.mainHeader}>We make it.</h1>
          <Typist.Backspace count={40} delay={250} />
          <h1 className={Style.mainHeader}>
            Welcome to <span style={{ fontWeight: "bold" }}>Brew</span>.
          </h1>
        </Typist>
      </div>
      <div className={Style.preloader}>
        <img src={require("../../images/preloader.svg")} alt="Preloader" />
      </div>
    </React.Fragment>
  )
}

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  handleContent = () => {
    this.setState({
      loaded: true,
    })
  }

  render() {
    if (!this.state.loaded) {
      setTimeout(() => {
        this.handleContent()
      }, 11000)
      return <div>{Loader()}</div>
    } else {
      return <div>{Content()}</div>
    }
  }
}

export default MainContent
