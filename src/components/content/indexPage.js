import React from "react"
import Style from "./styles/index.module.css"
import CoffeeImg from "../../images/coffee.svg"

const MainContent = () => {
  let leftStyles = `col-md-6 ${Style.left}`
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={leftStyles}>
          <h4>Stir. Serve. Taste.</h4>
          <h2 className={Style.header}>
            Welcome to London's finest brewer of coffee
          </h2>
          <button className="btn btn-warning btn-lg mr-2">Get Started</button>
          <button className="btn btn-warning btn-lg">Learn More</button>
        </div>
        <div className="col-md-6">
          <img className={Style.coffeeImg} src={CoffeeImg} alt="Coffee Cup" />
        </div>
      </div>
    </div>
  )
}

export default MainContent
