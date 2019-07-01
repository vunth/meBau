/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeStackNavigator from './components/home';

StatusBar.setHidden(true);

const AppContainer = createAppContainer(HomeStackNavigator);
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
