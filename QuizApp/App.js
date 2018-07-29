/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/app/components/Login/LoginScreen';
import DashboardScreen from './src/app/components/Dashboard/DashboardScreen';
import QuizScreen from './src/app/components/Quiz/QuizScreen';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const RootStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    QuizScreen: { screen: QuizScreen },
    DashboardScreen: { screen: DashboardScreen },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default class App {
  render() {
    return <RootStack />
  }
}