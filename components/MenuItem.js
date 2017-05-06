import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class MenuItem extends React.Component {
  render() {
    function submitMenu() {
      console.log("submitMenu");
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.controls}>
          <TextInput style={styles.textInput} />
          <Button title="Add To Cart" onPress={submitMenu}/>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  controls: {
    borderWidth: 0.5,
    borderColor: 'blue',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    borderWidth: 0.5,
    borderColor: 'yellow',
    flexDirection: 'column',
    width: '70%'
  },
  wrapper: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    textDecorationLine: 'underline',
    // width: '100%',
  },
  description: {
    fontSize: 12,
    // width: '100%'
  },
  textInput: {
    height: 40,
    width: 60,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
