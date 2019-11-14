import React, {Component} from 'react';
import { View, StyleSheet, AppRegistry, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../constants/Colors';

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Text style={styles.appTitle}>Welcome to</Text>
                <Text style={styles.appTitle}>PomoTodo</Text>
            </View>
            <TouchableOpacity style={styles.btnClickContain} activeOpacity={0.5}>
              <View style={styles.btnContainer}>
                <Image source={require('D:/D/CS300/pomotodo/assets/images/googleLogo.png')} style={styles.googleIcon}/>
                <Text style={styles.googleText}> Sign in with Google</Text>
              </View>
            </TouchableOpacity>
        </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgb(3, 28, 63)',
  },
  boxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 149,
    // marginBottom: 50,
  },
  appTitle: {
    // paddingTop: 30,
    // height:200,
    paddingLeft: 36,
    paddingRight: 36,
    fontSize: 59,
    color: '#fff',
  },
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 5,
    padding: 5,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    width: 261.7,
    height: 58,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 8,
    backgroundColor: "#fcfcfc",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
    width: 0,
    height: 0
    },
    shadowRadius: 8,
    shadowOpacity: 1,
  },
  googleText: {
    
    // paddingTop: 16,
    // paddingBottom: 16,
    // paddingLeft: 36,
    // paddingRight: 30,
    fontSize: 18,
    color: '#000', 
    width: 200,
    height: 40,
    // fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000", 
    // marginLeft: 10,
    // marginTop: 2,
    padding: 18.5 
  },
  googleIcon: {
    // padding: 9,
    marginTop: 9,
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  }
});

AppRegistry.registerComponent('pomotodo', () => App);
