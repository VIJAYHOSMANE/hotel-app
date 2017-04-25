import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Footer extends React.Component {
  render() {
    function func() {
      console.log('hello');
    }
    return (
      <View style={styles.container}>
        <Button color="white" title={"Menu"} onPress={func}/>
        <Button color="white" title={"Check Out"} onPress={func}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    position: 'absolute',
    bottom: 0,
    height: 73,
    width: '100%',
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    maxHeight: 100,
    borderWidth: 2,
    borderColor: 'red'
  },
});
