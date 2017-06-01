import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Tabs } from './config/router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    menu: {
      breakfast: {data: [{"addToCart": this.addToCart.bind(this), "name": "Sinktrap Hash", "description": "Uncle Terry's Sink Leavins Served With a Sneeze of Ketchup", "price": 32.99}, {"addToCart": this.addToCart.bind(this), "name": "Cousin Willie's Popcorn Omellete", "description": "Drizzled With Artisanal In-House Crotch-Churned Butter", "price": 12.50}], key: "breakfast"},

      lunch: {data: [{"addToCart": this.addToCart.bind(this), "name": "Aged Balut", "description": "Description for Aged Balut", "price": 32.99}, {"addToCart": this.addToCart.bind(this), "name": "Lunch Omellete", "description": "Served up Cold and Wet", "price": 18.00}], key: "lunch"},

      dinner: {data: [{"addToCart": this.addToCart.bind(this), "name": "Dinner Item One", "description": "Uncle Terry's Allergy Sneeze Pie", "price": 5.50}, {"addToCart": this.addToCart.bind(this), "name": "Dinner Item Number Two", "description": "Drizzled With Artisanal In-House Crotch-Churned Butter", "price": 40.00}], key: "dinner"}
    },
    cart: {
      hey: "ho",
    }
  }
  // this.toMenuDetail = this.toMenuDetail.bind(this);
  // this.addToCart = this.addToCart.bind(this);
}

addToCart(orderDetails) {
  console.log("orderDetails (menu component log)", orderDetails)
  const cart = {...this.state.cart}
  const timeStamp = Date.now();
  cart[`orderDetails${timeStamp}`] = orderDetails;

  this.setState({cart});
  console.log("cart", this.state.cart)

}

  render() {

    return (
      <Tabs screenProps={{"state": {...this.state}}}/>
    );
  }
}


const styles = StyleSheet.create({

});
