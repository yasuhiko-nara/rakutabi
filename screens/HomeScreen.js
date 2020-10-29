import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Page')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>Welcome!! Tap to show Map!</Text>
    </TouchableOpacity>
  );
}
