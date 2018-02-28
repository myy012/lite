import React from 'react';
import {
	TouchableHighlight,
	Image,
	View,
    Text,
    StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ExtendedService from '../view/ExtendedService';
import UserGroup from '../view/UserGroup';
import FamilyCare from '../view/FamilyCare';

export const HomeTabs = TabNavigator(
    {
        'FamilyCare': {
			screen: FamilyCare,
			navigationOptions: {
				title: '微信',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
					  	source={require('../assets/img/message.png')}
					  	style={{width:20, height: 20}}
					/>
				)
			}
		},
        'UserGroup': {
			screen: UserGroup,
			navigationOptions: {
				title: '通讯录',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
					  	source={require('../assets/img/contacts.png')}
					  	style={{width:20, height: 20}}
					/>
				)
			}
		},
        'ExtendedService': {
			screen: ExtendedService,
			navigationOptions: {
				title: '我',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
					  	source={require('../assets/img/me.png')}
					  	style={{width:20, height: 20}}
					/>
				)
			}
		}
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      headerMode: 'none',
      tabBarOptions: {
        activeTintColor: "#008000",
        activeBackgroundColor: "#fff",
        inactiveTintColor: "#b3b3bd",
        inactiveBackgroundColor: "#fff",
        showIcon: true,
        showLabel: true,
        style: {backgroundColor: "#fff"},
        tabStyle: {paddingTop: 2, paddingBottom: 0},
        labelStyle: {fontSize: 12, marginTop: 0, marginBottom: 5}
      }
    }
);
