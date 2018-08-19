import React, { Component } from "react"
import './styles.css'

export default class RestaurentDetails extends Component {
  render() {
    const  { restaurent } = this.props
    console.log("restaurent", restaurent)
    return(
      <div className="container">
      {restaurent.map((data, index) => (
      <div className="product-list">
        <div key={index} className="image-container">
          <img  src={data.imgSrc} alt=""/>
        </div>
        <div className="content-container">
          <h4 className="hotel-name">{data.name}</h4>
          <h3 className="address">{data.address}</h3>
          <div className="price-container">
            <div className="star-rating">{data.starRating}</div>
            <div className="price">Price:{data.price}</div>
            <div className="time">{data.time}min</div>
          </div>
        </div>
      </div>

      ))
    }
  </div>
    )
  }
}
