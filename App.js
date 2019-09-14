import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from './components/homepage/Homepage'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Homepage,
  },
});

export default createAppContainer(AppNavigator);
