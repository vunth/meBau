
import React from 'react';
import { Button, View, Text } from 'react-native';
class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail'
   };
 render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Home screen"
    onPress={() => this.props.navigation.navigate('Home')}
   />
  </View>
);
}
}
export default DetailScreen;