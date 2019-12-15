import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class DayScreen extends Component {
  render() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text>Days</Text>
          
        </ScrollView>
    );
  }
}

const contentContainerStyle = StyleSheet.create({
	container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
	}
});