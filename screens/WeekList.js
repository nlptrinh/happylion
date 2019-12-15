import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

  class Monday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }
  class Tuesday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }
  class Wednesday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }
  class Thursday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }
  class Friday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }
  class Saturday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }
  class Sunday extends React.Component {
    render() {
      return (
          <ScrollView contentContainerStyle={{ flex: 1, margin: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Week</Text>
            
          </ScrollView>
      );
    }
  }

  const WeekScreen = createMaterialTopTabNavigator(
    {
      Mon: { screen: Monday },
      Tue: { screen: Tuesday },
      Wed: { screen: Wednesday },
      Thu: { screen: Thursday },
      Fri: { screen: Friday },
      Sat: { screen: Saturday },
      Sun: { screen: Sunday },
    },
    {
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#000',
        showIcon: false,
        pressOpacity: 4,
        upperCaseLabel: false,
        indicatorStyle: {
          height: 30,
          width: 48,
          backgroundColor: '#353539',
          borderRadius: 8,
        },
        labelStyle:{
          fontSize: 22,
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: "500",
        },
        style:{
          backgroundColor: '#fff',
          height: 30,
          marginTop: 74,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        }
        },
    }
  );
  
  export default createAppContainer(WeekScreen);
  