'use strict';

import React, { Component } from 'react';
import {
	TouchableHighlight,
	Image,
	View,
    Text,
    StyleSheet
} from 'react-native';

export function titleOption(navigation, headerTitle = '', backName = '') {
    let headerStyle = {
        backgroundColor:'#fafafa',
        height: 44,
        width: '100%',
        borderBottomWidth: 0
    }
    let headerTitleStyle = {
        color: '#4a4a4a',
        fontSize: 18,
        fontWeight: 'normal'
    }
    let headerLeft = (
        <TouchableHighlight underlayColor="transparent" >
            <View style={styles.header}>
                <TouchableHighlight  onPress={() => {navigation.goBack()}}  underlayColor="transparent" style={styles.back}>
                    <Image style={styles.backImg} source={require('../assets/img/back.png')}></Image>
                </TouchableHighlight>
                <Text style={styles.backName}>{backName}</Text>
            </View>
        </TouchableHighlight>
    )
    return { headerStyle, headerTitleStyle, headerLeft, headerTitle }
}

const styles = StyleSheet.create({
	header: {
        flex: 1,
        flexDirection: 'row'
	},
	back: {
        padding: 10,
    },
    backImg: {
        width: 24,
        height: 24,
        marginLeft: 3
    },
    backName: {
        lineHeight: 44,
        fontSize:16,
        color: '#BE3468',
        marginLeft: -10
    }
});
