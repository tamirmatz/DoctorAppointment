import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import CodeLogin from './screens/CodeLogin';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Home from './screens/Home';
import Appointments from './screens/Appointments';
import AppContent from './components/AppContent';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CodeLogin: undefined;
  Appointments: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContent/>
      </NavigationContainer>
    </Provider>

  );
}
