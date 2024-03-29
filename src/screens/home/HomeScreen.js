/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, Image, StyleSheet, Text, View, Dimensions,
  ImageBackground, ProgressViewIOS, ProgressBarAndroid, Button
} from 'react-native';
import Header from './HomeHeader';
import backgroundImage from '../../assets/images/general/background.png';
import circleBackgroundImage from '../../assets/images/today/bg_vong_tron.png';
import calendarBackgroundImage from '../../assets/images/today/nen_calendar.png';
import calendarImage from '../../assets/images/today/icon_calendar.png';
import babyBoyImage from '../../assets/images/today/baby_boy.png';
import colors from '../../configs/colors';

export default class HomeScreen extends Component {
  render() {
    const progressBar = Platform.select({
      ios: <ProgressViewIOS style={styles.progressView} progressTintColor="red" progress={0.4} />,
      android: <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
    });
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{ flex: 1, alignSelf: 'stretch' }}>
          <Header />
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  justifyContent: 'flex-end',
                  paddingHorizontal: 15,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Avenir',
                    fontSize: 25,
                    color: colors.HEADER_TINT_COLOR,
                    textAlign: 'right',
                  }}
                >Dự sinh: </Text>
              </View>

              <ImageBackground
                source={calendarBackgroundImage}
                style={{
                  // flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderColor: '#D7E3E7',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginHorizontal: 10,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Avenir',
                    fontSize: 22,
                    color: '#F25B5D',
                    textAlign: 'left',
                  }}
                > 07/11/2018</Text>
                <Image
                  source={calendarImage}
                  style={{
                    width: 25,
                    height: 25,
                    marginHorizontal: 20,
                  }}
                />
              </ImageBackground>
            </View>
            <View
              style={{
                height: 50,
                marginTop: 20,
                padding: 10,
                paddingRight: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Avenir',
                  fontSize: 22,
                  color: '#00A3A8',
                  textAlign: 'center',
                }}
              > 28 tuần 3 ngày</Text>
              {progressBar}
            </View>
            <ImageBackground
              source={circleBackgroundImage}
              style={{
                flex: 1,
                marginTop: 15,
                borderColor: 'blue',
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Avenir',
                      fontSize: 22,
                      color: '#00A9AD',
                      textAlign: 'center',
                      fontWeight: 'bold'
                    }}
                  > Kent</Text>
                  <Text
                    style={{
                      fontFamily: 'Avenir',
                      fontSize: 22,
                      color: '#F24C4F',
                      textAlign: 'center',
                    }}
                  > 34 - 37 cm</Text>
                  <Text
                    style={{
                      fontFamily: 'Avenir',
                      fontSize: 22,
                      color: '#F24C4F',
                      textAlign: 'center',
                    }}
                  > 660 - 1000 gram</Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={babyBoyImage}
                    style={{
                      width: (width - 40) / 2,
                      height: (width - 40) / 2,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  flex: 1,
                }}
              >
                {/* <Text
                  style={{
                    fontFamily: 'Avenir',
                    fontSize: 25,
                    color: colors.HEADER_TINT_COLOR,
                    textAlign: 'right',
                  }}
                >Dự sinh: </Text> */}
                <View
                  style={{
                    flex: 1,
                  }}
                />
                <View
                  style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 1,
                      flex: 1,
                    }}
                  >
                  </View>
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 1,
                      flex: 1,
                    }}
                  >
                    <Button title="Go to Detail screen"
                      onPress={() => this.props.navigation.navigate('Detail')}
                    />
                  </View>
                </View>

              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>QUẢNG CÁO</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  progressView: {
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
