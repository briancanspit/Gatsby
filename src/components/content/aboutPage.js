import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import Style from "./styles/about.module.css"
import Dine from "../../images/dine.svg"
import Virtual from "../../images/virtual.svg"
import World from "../../images/universe.svg"

const MainContent = () => {
  return (
    <div className="container-fluid fade-in-bck">
      <Carousel autoPlay={4000} animationSpeed={1500} infinite arrows>
        <div className="row">
          <div className="col-md-6">
            <h2>Organization</h2>
          </div>
          <div className="col-md-6">
            <img src={Dine} className={Style.images} alt="Organized" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Satisfaction</h2>
          </div>
          <div className="col-md-6">
            <img src={Virtual} className={Style.images} alt="Satisfying" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Availability</h2>
          </div>
          <div className="col-md-6">
            <img src={World} className={Style.images} alt="Country wide" />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default MainContent

/*
background-color: #7b59ff;
*/
