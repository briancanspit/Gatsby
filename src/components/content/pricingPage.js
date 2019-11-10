import React from "react"
import Style from "./styles/pricing.module.css"

const MainContent = () => {
  let top = `${Style.header} ${Style.top}`
  let cost = `${Style.cost}`
  let pro = `${Style.columns} ${Style.pro}`
  return (
    <div className="fade-in-bck">
      <div className={Style.columns}>
        <ul className={Style.price}>
          <li className={top}>Basic</li>
          <li className={cost}>$ 14.99 / month</li>
          <li className={Style.grey}>1 Cup of Coffee Per Day</li>
          <li className={Style.grey}>3 Assorted Snacks</li>
          <li className={Style.grey}>3 Different Flavors</li>
          <li className={Style.grey}>Free Delivery</li>
          <li className={Style.bottom}>
            <a href="#" className={Style.button}>
              Select Basic Plan
            </a>
          </li>
        </ul>
      </div>

      <div className={Style.columns}>
        <ul className={Style.price}>
          <li className={top} style={{ background: "#940a37" }}>
            Premium
          </li>
          <li className={cost}>$ 99.99 / month</li>
          <li className={Style.grey}>Unlimited Coffee Supply</li>
          <li className={Style.grey}>20 Assorted Snacks</li>
          <li className={Style.grey}>10+ Different Flavors</li>
          <li className={Style.grey}>Free Delivery</li>
          <li className={Style.bottom}>
            <a href="#" className={Style.button}>
              Select Premium Plan
            </a>
          </li>
        </ul>
      </div>

      <div className={pro}>
        <ul className={Style.price}>
          <li className={top}>Pro</li>
          <li className={cost}>$ 49.99 / month</li>
          <li className={Style.grey}>3 Cups Of Coffee Per Day</li>
          <li className={Style.grey}>10 Assorted Snacks</li>
          <li className={Style.grey}>5 Different Flavors</li>
          <li className={Style.grey}>Free Delivery</li>
          <li className={Style.bottom}>
            <a href="#" className={Style.button}>
              Select Pro Plan
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainContent
