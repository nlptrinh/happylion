import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';

import { BottomNavigation } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import FolderScreen from './FolderScreen';
import AddTodoButton from '../components/AddTodoButton';
import firebase from 'firebase';
import '@firebase/firestore';

//-----------------------------------

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'FolderScreen', title: 'FolderScreen', icon: 'queue-music' },
      { key: 'HomeScreen', title: 'HomeScreen', icon: 'album' },
      { key: 'ProfileScreen', title: 'ProfileScreen', icon: 'history' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = BottomNavigation.SceneMap({
    FolderScreen:FolderScreen,
    HomeScreen:HomeScreen,
    ProfileScreen:ProfileScreen,
  });

  render() {
    return (
      <View>
        <AddTodoButton onPress={() => this.setState({ addingTodo: true })} />
      
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this.handleIndexChange}
        renderScene={this.renderScene}
      />
      </View>
      
    );
  }
}