import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class Info extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };
  render() {

    return (
      <View>
      <View style={styles.utilityPadding}></View>
      <View style={styles.infoWrapper}>
        <Text>Name of Hotel</Text>
        <Text>Room Service Line: 123-555-1234</Text>
        <Text>Hours</Text>
        <Text>Monday: 5am-Midnight</Text>
        <Text>Tuesday: 5am-Midnight</Text>
        <Text>Wednesday: 5am-Midnight</Text>
        <Text>Thursday: 5am-Midnight</Text>
        <Text>Friday: 24 Hours</Text>
        <Text>Saturday: 24 hours</Text>
        <Text>Sunday: 5am-Midnight</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  utilityPadding: {
    height: 25,
  }
});
