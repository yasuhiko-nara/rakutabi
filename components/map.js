import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function () {
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <MapView
      apikey={GOOGLE_MAPS_API_KEY}
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 35.681236,
        longitude: 139.767125,
        latitudeDelta: 0.02, //小さくなるほどズーム
        longitudeDelta: 0.02,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 35.681236,
          longitude: 139.767125,
        }}
        title={'東京駅'}
        description={'JRの駅です。'}
        onPress={() => alert('click')}
      />
    </MapView>
  );
}
