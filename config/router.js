import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Menu from '../components/Menu';
import Info from '../components/Info';
import Cart from '../components/Cart';

export const Tabs = TabNavigator({
  Menu: {
    screen: Menu
  },
  Info: {
    screen: Info
  },
  Cart: {
    screen: Cart
  },
})
