import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HeaderComp extends React.Component {
  render() {
    return (
      <View title={this.props.title}>
        <text>Hello!</text>
      </View>
    );
  }
}
