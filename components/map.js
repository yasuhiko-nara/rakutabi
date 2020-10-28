import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from './MapDirecitons';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setStart } from '../store/actions/action';

export default function () {
  const dispatch = useDispatch();
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
        onPress={() => {
          dispatch(setStart({ payload: 'test' }));
        }}
        coordinate={{
          latitude: 35.68,
          longitude: 139.76,
        }}
        title={'東京駅'}
        description={'JRの駅です。'}
        // onPress={() => alert('click')}
      />
    </MapView>
  );
}
