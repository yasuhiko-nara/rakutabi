import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';

export default function () {
  const origin = { latitude: 35.681236, longitude: 139.767125 };
  const destination = { latitude: 35.6, longitude: 139.7 };
  return (
    <MapViewDirections
      apikey={GOOGLE_MAPS_API_KEY}
      origin={origin}
      destination={destination}
      mode="BICYCLING"
      language="ja"
      onReady={(result) => {
        console.log(('result', result));
      }}
    />
  );
}
