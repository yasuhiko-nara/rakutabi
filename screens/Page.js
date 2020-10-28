import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
export default function Page({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>Page</Text>
    </TouchableOpacity>
  );
}
