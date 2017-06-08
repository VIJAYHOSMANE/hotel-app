import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class MenuDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      itemQty: '',
    }

    this.getItemQty = this.getItemQty.bind(this);
  }

  static navigationOptions = {
    title: 'MenuDetail',
  };

  getItemQty(e) {
    // console.log("this.itemQty", this.itemQty.value);
    e.preventDefault();

    const orderDetails = {
      itemQty: this.state.itemQty,
      name: this.props.navigation.state.params.name,
      description: this.props.navigation.state.params.description,
      price: this.props.navigation.state.params.price

    }
    this.props.navigation.state.params.addToCart(orderDetails);
    // this.itemQty.reset();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.navigation.state.params.name}</Text>
        <Text style={styles.text}>{this.props.navigation.state.params.description}</Text>
        <Text style={styles.text}>{this.props.navigation.state.params.price}</Text>
        <View style={styles.container}>
          <TextInput style={styles.input} onChangeText={(text) => this.setState({itemQty: text})}></TextInput>
        </View>
        <Button title="Add To Cart" onPress={this.getItemQty}></Button>
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
