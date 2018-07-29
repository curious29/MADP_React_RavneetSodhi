/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/app/components/Login/LoginScreen';
import DashboardScreen from './src/app/components/Dashboard/DashboardScreen';
import QuizScreen from './src/app/components/Quiz/QuizScreen';

const App = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    QuizScreen: { screen: QuizScreen },
    DashboardScreen: { screen: DashboardScreen },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default App;