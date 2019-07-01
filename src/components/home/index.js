import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeHeader from './HomeHeader';
import HomeScreen from './HomeScreen';

export default createStackNavigator(
    {
        HomeScreen,
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: ({ navigation }) => ({
            header: null//<HomeHeader navigation={navigation} />
        }),
    }
);
