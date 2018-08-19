import React, { Component } from 'react';
import RestaurentDetails from "./RestaurentDetails"
const restaurent = [
	{
		"name": "The bowl company",
		"address": "Continental, Indian, Pan-Asian",
		"imgSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c1jsdi1bpio5n2wrvfhi",
		"time": 39,
		"price": 350,
		"starRating": 4.4,
	},
	{
		"name": "Pizza hut",
		"address": "Continental, Indian, Pan-Asian",
		"imgSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vrangc3bsqlnfbcnnpdd",
		"time": 39,
		"price": 350,
		"starRating": 4.4,
	},
	{
		"name": "The company",
		"address": "Continental, Indian, Pan-Asian",
		"imgSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c1jsdi1bpio5n2wrvfhi",
		"time": 39,
		"price": 350,
		"starRating": 4.4,
	},
	{
		"name": "KFC",
		"address": "Continental, Indian, Pan-Asian",
		"imgSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yzgyttvbgzn56lutj5mv",
		"time": 39,
		"price": 350,
		"starRating": 4.4,
	},
	{
		"name": "The bowl company",
		"address": "Continental, Indian, Pan-Asian",
		"imgSrc": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/alry06v0wpup7nhrublo",
		"time": 39,
		"price": 350,
		"starRating": 4.4,
	},

]
export default class RestaurentHome extends Component {
  render() {
    return (
      <div className="App">
        Welcome to my restaurent
				<RestaurentDetails restaurent={restaurent}/>
      </div>
    );
  }
}
