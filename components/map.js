import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';

export default function () {
  const origin = { latitude: 35.681236, longitude: 139.767125 };
  const destination = { latitude: 35.6, longitude: 139.7 };

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
          latitude: 35.68,
          longitude: 139.76,
        }}
        title={'東京駅'}
        description={'JRの駅です。'}
        onPress={() => alert('click')}
      />
      <MapViewDirections
        apikey={GOOGLE_MAPS_API_KEY}
        origin={origin}
        destination={destination}
      />
    </MapView>
  );
}
