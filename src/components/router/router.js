import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../../screens/home/HomeScreen';
import Detail from '../../screens/detail/DetailScreen';
import Setting from '../../screens/setting/settingScreen';
const homeNavigatorStack= createStackNavigator({
  Home: {
   screen: Home
  },
  Detail: {
    screen: Detail
   },
});

const settingNavigatorStack= createStackNavigator({
  Setting: {
   screen: Setting
  },
  Detail: {
    screen: Detail
   },
});

const appNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeNavigatorStack,
      navigationOptions: {
        title: "Home"
      }
    },
    Setting: {
      screen: settingNavigatorStack,
      navigationOptions: {
        title: "Setting"
      }
    }
  }
);
export default createAppContainer(homeNavigatorStack);