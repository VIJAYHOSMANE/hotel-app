import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  componentDidMount() {
    console.log("this.props.screenProps.state.cart", this.props.screenProps.state.cart.hey)
  }

  render() {

    return (
      <View>
        {Object.keys(this.props.screenProps.state.cart)
          .map((key) => <CartItem data={this.props.screenProps.state.cart[key]}/>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
