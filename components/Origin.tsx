import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import MapViewDirections from './MapDirecitons';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { setStart, setMyLocation } from '../store/actions/action';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function () {
  const dispatch = useDispatch();
  const startPoint = useSelector((state) => state.map.startPoint);
  const myLocation = useSelector((state) => state.map.myLocation);
  const onDragEnd = (e) => {
    dispatch(setStart(e.nativeEvent.coordinate));
  };
  const errorMsg = useRef(null);

  const LOCATION_SETTINGS = {
    accuracy: Location.Accuracy.Balanced,
    timeInterval: 1000,
    distanceInterval: 0,
  };

  const LOCATION_CB = (myLocation) => {
    dispatch(setMyLocation(myLocation));
    // うまくwatchLocationが1秒おきに動いていないが仕方ない
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        errorMsg.current = 'Permission to access location was denied';
      }
      let firstLocation = await Location.getCurrentPositionAsync({});
      dispatch(
        setStart({
          latitude: firstLocation.coords.latitude,
          longitude: firstLocation.coords.longitude,
        })
      );
      // 初回に自己位置を特定して、それを出発地と仮置く

      await Location.watchPositionAsync(LOCATION_SETTINGS, LOCATION_CB);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (myLocation.coords.latitude) {
    text = JSON.stringify(myLocation);
  }

  return (
    <>
      {myLocation.coords.latitude && startPoint.latitude && (
        <MapView
          apikey={GOOGLE_MAPS_API_KEY}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={{
            latitude: myLocation.coords.latitude,
            longitude: myLocation.coords.longitude,
            latitudeDelta: 0.02, //小さくなるほどズーム
            longitudeDelta: 0.02,
          }}
          showsCompass={true}
        >
          <Marker
            coordinate={{
              latitude: myLocation.coords.latitude,
              longitude: myLocation.coords.longitude,
            }}
            title={`現在地`}
          />
          <Marker
            coordinate={{
              latitude: startPoint.latitude,
              longitude: startPoint.longitude,
            }}
            title={`出発地`}
            description={'出発地をドラッグで選択'}
            draggable
            onPress={() => {
              alert({ text });
            }}
            onDragEnd={onDragEnd}
          />
        </MapView>
      )}
    </>
  );
}
