import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

export default class DashboardScreen extends Component{
  render(){
    return(
      <View style = {{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>
          Loading Screen
        </Text>
      </View>
    )
  }
}