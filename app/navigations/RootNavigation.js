import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { Map, Songs } from '../screens';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <RootStack.Navigator
    screenOptions={() => {
      return {
        headerTintColor: config.colors.appTheme,
        headerTitleStyle: {
          color: config.colors.black,
        },
        headerBackTitle: 'Back',
      };
    }}>
    <RootStack.Screen name={config.routes.MAP} component={Map} />
    <RootStack.Screen name={config.routes.SONGS} component={Songs} />
  </RootStack.Navigator>
);

export default RootNavigation;
