import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}
    >
      <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
      <View style={{ backgroundColor: 'red', flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemcontainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftcontainer: {
    backgroundColor: 'red',
    width: 100,
  },
  rightcontainer: {
    backgroundColor: 'blue',
    flex: 1,
  },
});
