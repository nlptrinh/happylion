import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import { Ionicons } from '@expo/vector-icons';

import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator, } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
//import HomeScreen from './screens/HomeScreen';
import MyComponent from './screens/MainActivity';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import * as firebase from 'firebase';
import { firebaseConfig } from './Config';

//-----------------------------------

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <MyComponent/>
    );
  } 
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  LoadingScreen:LoadingScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ])
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
