import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class MenuDetail extends React.Component {
  static navigationOptions = {
    title: 'MenuDetail',
  };
  render() {

    return (
      <View>
        <Text>MenuDetail Test {this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
