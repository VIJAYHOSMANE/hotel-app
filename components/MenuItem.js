import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, } from 'react-native';

export default class MenuItem extends React.Component {
  render() {
    function submitMenu() {
      console.log("submitMenu");
    }
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="white" activeOpacity={1}>
      {/* <View style={styles.wrapper}> */}

        <View style={styles.menuItem}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
          <Text style={styles.price}>{this.props.price}</Text>
        </View>

      {/* </View> */}
      </TouchableHighlight>
    );
  }
}



const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: 'black',
    height: 150,
    justifyContent: 'center',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'yellow',
    height: 150,
    // width: '70%'
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    textDecorationLine: 'underline',
    textAlign: 'center',
    // width: '100%',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    // width: '100%'
  },
});
