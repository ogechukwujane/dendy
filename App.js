import React from 'react';
// import{SafeAreaView ,Text,View} from 'react-native'
// import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/homeStack';

export default function App() {
  return(
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}