import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CartItem from './CartItem'


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
      <View style={styles.utilityPadding}></View>
      <View>
        {Object.keys(this.props.screenProps.state.cart)
          .map((key) => <CartItem key={key} data={this.props.screenProps.state.cart[key]}/>)
        }
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  utilityPadding: {
    height: 25,
  }
});
