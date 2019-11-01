import React, { Component } from "react"
import Typist from "react-typist"
import Style from "./styles/index.module.css"
import CoffeeImg from "../../images/coffee.svg"
import "../../../node_modules/react-typist/dist/Typist.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"

const Content = () => {
  let leftStyles = `col-md-6 fade-in-left ${Style.left}`
  let btnStyle1 = `btn btn-lg ${Style.button} mr-2`
  let btnStyle2 = `btn btn-lg ${Style.button}`
  let btnText = `mr-2 ${Style.buttonText}`
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={leftStyles}>
          <h1 style={{ color: "#940a37", fontWeight: "bold" }}>
            Espresso Heaven
          </h1>
          <h4 style={{ width: 435, paddingTop: 20 }}>
            We are the leading provider of packaged coffee in Kenya, and operate
            in over 150 locations.
            <br />
            <br />
            Get your coffee delivered to you for <em>free</em> today. Make an
            order or explore our site.
          </h4>
          <br />
          <br />
          <button className={btnStyle1}>
            <span className={btnText}>Make An Order</span>
            <FontAwesomeIcon
              className={Style.fontAwesome}
              icon={faMugHot}
              color="#dfddc7"
            />
          </button>
          <button className={btnStyle2}>
            <span className={btnText}>See Our Works</span>
            <FontAwesomeIcon
              className={Style.fontAwesome}
              icon={faArrowAltCircleRight}
              color="#dfddc7"
            />
          </button>
        </div>
        <div className="col-md-6 fade-in-right">
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
        <Typist avgTypingDelay={55} startDelay={500}>
          <h1 className={Style.mainHeader}>Running late?</h1>
          <Typist.Backspace count={40} delay={255} />
          <h1 className={Style.mainHeader}>Didn't have coffee?</h1>
          <Typist.Backspace count={40} delay={260} />
          <h1 className={Style.mainHeader}>
            Introducing <span style={{ fontWeight: "bold" }}>Brew</span>.
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
      }, 9700)
      return <div>{Loader()}</div>
    } else {
      return <div>{Content()}</div>
    }
  }
}

export default MainContent
