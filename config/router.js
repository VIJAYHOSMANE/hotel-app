import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Menu from '../components/Menu';
import Info from '../components/Info';
import Cart from '../components/Cart';

import MenuDetail from '../components/MenuDetail';

export const MenuStack = StackNavigator({
  Menu: {
    screen: Menu,
  },
  MenuDetail: {
    screen: MenuDetail,
  }
})

export const Tabs = TabNavigator({
  Menu: {
    screen: MenuStack
  },
  Info: {
    screen: Info
  },
  Cart: {
    screen: Cart
  },
})
