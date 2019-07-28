import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Rewards from '../screens/Rewards';
import Trip from '../screens/Trip';
import AddItem from '../screens/AddItem';

import { theme } from '../constants';


const screens = createStackNavigator({
    Welcome,
    Rewards,
    Trip,
    AddItem,
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: theme.colors.gray4,
            borderBottomColor: "transparent",
        },
        headerTitleContainerStyle: {
            alignItems: 'flex-end',
            paddingLeft: theme.sizes.padding,
        },
        headerLeftContainerStyle: {
            alignItems: 'flex-end',
            marginLeft: theme.sizes.padding,
            paddingRight: theme.sizes.base,
        }
    },

});

export default createAppContainer(screens);
