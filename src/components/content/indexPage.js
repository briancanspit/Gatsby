import React from "react"
import Style from "./styles/index.module.css"
import CoffeeImg from "../../images/coffee.svg"

const MainContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h2 className={Style.headerText}>
            Welcome to London's finest brewer of coffee
          </h2>
        </div>
        <div className="col-md-6">
          <img className={Style.coffeeImg} src={CoffeeImg} alt="Coffee Cup" />
        </div>
      </div>
    </div>
  )
}

export default MainContent
