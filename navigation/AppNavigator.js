import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    LoadingScreen:LoadingScreen,
    LoginScreen:LoginScreen,
    HomeScreen:HomeScreen,
  })
);
