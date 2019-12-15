import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Tab, Tabs, StyleProvider } from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

import WeekScreen from './WeekList'
import DayScreen from './DayList'

import firebase from 'firebase';
import '@firebase/firestore';

//-----------------------------------

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading='Today'>
            <DayScreen />
          </Tab>
          <Tab heading='Weekday'>
            <WeekScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  };
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});