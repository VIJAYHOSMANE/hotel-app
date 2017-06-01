import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SectionList, Dimensions } from 'react-native';
import MenuItem from './MenuItem';


export default class Menu extends React.Component {
  constructor() {
    super()
    this.toMenuDetail = this.toMenuDetail.bind(this);
  }

  static navigationOptions = {
    title: 'Menu',
  };

  toMenuDetail(item) {
    console.log("onPress worked");
    this.props.navigation.navigate('MenuDetail', item);
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          containerStyle={{ borderWidth: 5 }}
          renderItem={({item}) => {
            return <MenuItem name={item.name} description={item.description} price={item.price} addToCart={this.props.screenProps.addToCart} onPress={() => this.toMenuDetail(item)}/> }}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text> }
            sections={[this.props.screenProps.state.menu.breakfast, this.props.screenProps.state.menu.lunch, this.props.screenProps.state.menu.dinner]}
            keyExtractor={(item) => item.name}
          />
      </View>
    );
  }
}

let screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  sectionList: {
    borderWidth: 5,
    borderColor: 'black',
  },
  container: {
    height: 500,
    width: screenWidth,
    alignItems: 'center',
  },
  sectionHeader: {
    textAlign: 'center',
  }
});
