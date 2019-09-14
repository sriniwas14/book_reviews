import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homepage from './components/homepage/Homepage'
import SingleBook from './components/singleBook/SingleBook'
import { Provider } from 'react-redux'
import store from './store'

const AppNavigator = createStackNavigator({
    Home:{
      screen: Homepage
    },
    Single:{
      screen: SingleBook
    } 
  },
  {
    initialRouteName: 'Home',
  }
  );

  let Navigation = createAppContainer(AppNavigator);

  export default class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
  }
