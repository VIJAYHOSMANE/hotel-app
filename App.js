import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionList from 'react-native/Libraries/CustomComponents/Lists/SectionList';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      item: {
        title: "thetitle"
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <SectionList
  renderItem={({item}) => { return <Text style={styles.menuItem}>{item.title}</Text>}}
  renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text> }
  sections={[ // homogenous rendering between sections
    {data: [{"title": "Uncle Benny's Sticky FlapCakes"}, {"title": "Sinktrap Hash"}, {"title": "Cup of Refried Yolks"}], key: "Breakfast"},
    {data: [{"title": "Grandpa's Mashed Balls"}, {"title": "Aged Hanger Steak (Served Moist)"}, {"title": "Aunt Beverly's Double-Stuffed Creamy Taco With Anchovie Remoulade"}], key: "Lunch"},
    {data: [{"title": "Mom's Dry Sausage Served over Pheasant Feathers"}, {"title": "Earnest's Crawdad Boil with Parboiled Nut Crust"}, {"title": "Terry's LogJammed Brat Tower (Served Smothered with Banger Sauce)"}], key: "Dinner"},
  ]}
  keyExtractor={(item) => item.title}
/>
        <Footer />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    fontWeight: "800",
  },
  menuItem: {
    marginTop: 5,
    marginBottom: 5,
  },
  scrollView: {
    borderWidth: 0.5,
    borderColor: 'red',
    width: '90%',
    // top: 73,
  },
  scrollView: {
    backgroundColor: '#eeeeee',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
