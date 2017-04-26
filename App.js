import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        {/* <View style={styles.menu}> */}
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <Text>Hello this is sample text to check to see if this scrolls and it might spill over blah blah blah</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
          <Text>Hello this is sample text to check to see if this scrolls</Text>
        </ScrollView>
        {/* </View> */}
        <Footer />
      </View>
    );
  }
}


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
