import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../../configs/colors';
import { isX } from '../../helper/utilities';

export default class HomeHeader extends Component {
    render() {
        const { wrapper, title } = styles;
        return (
            <View style={wrapper}>
                <Text style={title}>Hôm nay</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: isX ? 84 : 64,
        backgroundColor: colors.HEADER_BACKGROUND_COLOR,
        paddingHorizontal: 10,
        paddingTop: isX ? 35 : 10,
        paddingBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: '600',
        color: colors.HEADER_TINT_COLOR,
    }
});
