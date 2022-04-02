import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

import LogInScreen from './screens/LogInScreen'
import DashboardScreen from './screens/DashboardScreen'
import LoadingScreen from './screens/LoadingScreen'

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

import * as firebase from 'firebase'
import firebaseConfig from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.apps()
}

var AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LogInScreen:LogInScreen,
  DashboardScreen:DashboardScreen
})

var AppContainer = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppContainer/>
  );
}