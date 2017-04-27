import React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <SectionList
    renderItem={({item}) => <ListItem title={item.title} />}
    renderSectionHeader={({section}) => <H1 title={section.key} />}
    sections={[ // homogenous rendering between sections
      {data: [...], key: 1},
      {data: [...], key: 2},
      {data: [...], key: 3},
    ]}
  />
        <Footer />
      </View>
    );
  }
}

/* <ScrollView
  ref={(scrollView) => { _scrollView = scrollView; }}
  automaticallyAdjustContentInsets={false}
  onScroll={() => { console.log('onScroll!'); }}
  scrollEventThrottle={200}
  style={styles.scrollView}>

</ScrollView> */

const styles = StyleSheet.create({
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
