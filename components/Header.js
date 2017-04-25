import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Header extends React.Component {
  render() {
    function func() {
      console.log('hello');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Testing(header)</Text>
        <Button color="white" title={"Info"} onPress={func}/>
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
    top: 0,
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
