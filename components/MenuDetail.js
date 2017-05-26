import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class MenuDetail extends React.Component {

  static navigationOptions = {
    title: 'MenuDetail',
  };

  getItemQty(e) {
    e.preventDefault();

    const orderDetails = {
      itemQty: this.itemQty.value;
    }
    this.props.addToCart(orderDetails);
    this.itemQty.reset();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.navigation.state.params.name}</Text>
        <Text style={styles.text}>{this.props.navigation.state.params.description}</Text>
        <Text style={styles.text}>{this.props.navigation.state.params.price}</Text>
        <View style={styles.container}>
          <TextInput style={styles.input} ref={(input)=> this.itemQty = input}></TextInput>
        </View>
        <Button title="Add To Cart" onPress={this.getItemQty.bind(this)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  input: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  }
});
