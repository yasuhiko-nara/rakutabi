import React from 'react';
import { Text, View } from 'react-native';
// import Map from '../components/Origin';
// import { Provider } from 'react-redux';
// import store from '../store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Page from '../screens/Page';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
