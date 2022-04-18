import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Menu from '../screens/menu';
import DashBoard from '../screens/dashboard';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
};
export default HomeStack;