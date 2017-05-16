import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuItem from './components/MenuItem';
import SectionList from 'react-native/Libraries/CustomComponents/Lists/SectionList';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      menu: {
        breakfast: {data: [{"name": "Sinktrap Hash", "description": "Uncle Terry's Sink Leavins Served With a Sneeze of Ketchup", "price": 32.99}, {"name": "Cousin Willie's Popcorn Omellete", "description": "Drizzled With Artisanal In-House Crotch-Churned Butter", "price": 12.50}], key: "breakfast"},

        lunch: {data: [{"name": "Aged Balut", "description": "Description for Aged Balut", "price": 32.99}, {"name": "Lunch Omellete", "description": "Served up Cold and Wet", "price": 18.00}], key: "lunch"},

        dinner: {data: [{"name": "Dinner Item One", "description": "Uncle Terry's Allergy Sneeze Pie", "price": 5.50}, {"name": "Dinner Item Number Two", "description": "Drizzled With Artisanal In-House Crotch-Churned Butter", "price": 40.00}], key: "dinner"}
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <SectionList
          style={styles.sectionList}
          renderItem={({item}) => {
            return <MenuItem name={item.name} description={item.description} price={item.price} /> }}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text> }
          sections={[this.state.menu.breakfast, this.state.menu.lunch, this.state.menu.dinner]}
          keyExtractor={(item) => item.name}
        />
        <Footer />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  sectionList: {
    borderWidth: 3,
    borderColor: 'black',
    width: '90%',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: 'center',
  },
  menuItem: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 12
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
});
