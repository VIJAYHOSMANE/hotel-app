import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatList from 'react-native/Libraries/Lists/FlatList';

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
        <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
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
