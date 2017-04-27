import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Header extends React.Component {
  render() {
    function func() {
      console.log('hello');
    }
    return (
      <View>
      <View style={styles.statusBuffer}></View>
      <View style={styles.container}>
        <Text style={styles.text}>Testing(header)</Text>
        <Button color="white" title={"Info"} onPress={func}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBuffer: {
    minHeight: 20,
    maxHeight: 20,
    width: '100%',
    backgroundColor: 'red'
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: "800",
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 45,
    borderWidth: 2,
    borderColor: 'red'
  },
});
