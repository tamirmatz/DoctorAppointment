// navigation/RootNavigator.tsx
import React from 'react';
import Home from '../screens/Home';
import CodeLogin from '../screens/CodeLogin';
import Login from '../screens/Login';
import Header from '../components/Header';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import Appointments from '../screens/Appointments';


const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
            header: () => <Header isBack={false} title='התחברות'/>
        }}
        />
        <Stack.Screen name="CodeLogin" component={CodeLogin}  options={{
            header: () => <Header isBack title='התחברות'/>
        }}/>
        <Stack.Screen name="Home" component={Home}  options={{
            header: () => <Header isBack={false} title='זימון תורים'/>
        }}/>
        <Stack.Screen name="Appointments" component={Appointments}  options={{
            header: () => <Header isBack={true} title='זימון תורים'/>
        }}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
