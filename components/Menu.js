import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SectionList, Dimensions } from 'react-native';
import MenuItem from './MenuItem';


export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: {
        breakfast: {data: [{"name": "Sinktrap Hash", "description": "Uncle Terry's Sink Leavins Served With a Sneeze of Ketchup", "price": 32.99}, {"name": "Cousin Willie's Popcorn Omellete", "description": "Drizzled With Artisanal In-House Crotch-Churned Butter", "price": 12.50}], key: "breakfast"},

        lunch: {data: [{"name": "Aged Balut", "description": "Description for Aged Balut", "price": 32.99}, {"name": "Lunch Omellete", "description": "Served up Cold and Wet", "price": 18.00}], key: "lunch"},

        dinner: {data: [{"name": "Dinner Item One", "description": "Uncle Terry's Allergy Sneeze Pie", "price": 5.50}, {"name": "Dinner Item Number Two", "description": "Drizzled With Artisanal In-House Crotch-Churned Butter", "price": 40.00}], key: "dinner"}
      }
      cart: {

      }
    }
    this.toMenuDetail = this.toMenuDetail.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  static navigationOptions = {
    title: 'Menu',
  };

  addToCart(orderDetails) {
    const cart = {...this.state.cart};
    const timeStamp = Date.now();
    cart[`orderDetails${timeStamp}`] = orderDetails;

    this.setState({cart});

  }

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
            return <MenuItem name={item.name} description={item.description} price={item.price} addToCart={this.addToCart} onPress={() => this.toMenuDetail(item)}/> }}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text> }
            sections={[this.state.menu.breakfast, this.state.menu.lunch, this.state.menu.dinner]}
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
