import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Testing(header)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',

  },
  container: {
    position: 'absolute',
    top: 0,
    height: 60,
    width: '100%',
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 100,
    borderWidth: 2,
    borderColor: 'red'
  },
});
