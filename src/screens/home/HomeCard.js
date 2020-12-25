import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

// Component for home restaurant card
export default function HomeCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.restaurant.restaurant_name}
          height="140"
          image={props.restaurant.photo_URL}
          title={props.restaurant.restaurant_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.restaurant.restaurant_name}
          </Typography>
          <Typography variant="body2" component="p">
            {props.restaurant.categories}
          </Typography>
        </CardContent>
        <CardContent className="card-section2">
          <Typography variant="body1" className="card-rating">
            <i className="fa fa-star" /> {props.restaurant.customer_rating} (
            {props.restaurant.number_customers_rated})
          </Typography>
          <Typography variant="body1" className="card-price">
            <i className="fa fa-inr" aria-hidden="true" />{" "}
            {props.restaurant.average_price} for two
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
