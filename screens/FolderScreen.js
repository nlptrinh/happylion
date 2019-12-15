import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import firebase from 'firebase';
import '@firebase/firestore';

//-----------------------------------

export default class FolderScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FolderScreen</Text>
      </View>
    );
  };
}

FolderScreen.navigationOptions = {
  title: 'Folders',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});