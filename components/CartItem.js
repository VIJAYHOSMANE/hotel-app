import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class CartItem extends React.Component {

  render() {

    return (
      <View style={styles.itemWrapper}>
        <Text>{this.props.data.name}</Text>
        <Text>{this.props.data.description}</Text>
        <Text>Price: {this.props.data.price}</Text>
        <Text>Quantity: {this.props.data.itemQty}</Text>
        <Text>Total Price: {this.props.data.price * this.props.data.itemQty}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    borderColor: 'black',
    borderWidth: 1,
  }
});
