import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../../screens/home/HomeScreen';
import Detail from '../../screens/detail/DetailScreen';
const navigator= createStackNavigator({
  Home: {
   screen: Home
  },
  Detail: {
    screen: Detail
   },
});
export default createAppContainer(navigator);