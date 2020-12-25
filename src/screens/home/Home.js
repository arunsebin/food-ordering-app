import React, { Component } from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
import Box from "@material-ui/core/Box";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      loading: false
    };
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    let restaurantDetails = {};

    return (
      <div>
        <div className="card-container">
          {this.state.restaurants.map((restaurant) => (
            <Box key={restaurant.id} className="card-main">
              <HomeCard restaurant={restaurant} />
            </Box>
          ))}
        </div>
      </div>
    );
  }

  //fetches the restaurants from backend
  getRestaurants = () => {
    const headers = { Accept: "application/json" };
    let that = this;
    let url = "http://localhost:8080/api/restaurant";
    return fetch(url, { method: "GET", headers })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        that.setState({
          restaurants: jsonResponse.restaurants
        });
      })
      .catch((error) => {
        console.log("error user data", error);
      });
  };
}

export default Home;
