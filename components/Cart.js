import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };
  render() {

    return (
      <View>
        <Text>Cart Test {this.props.screenProps.itemQty}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
