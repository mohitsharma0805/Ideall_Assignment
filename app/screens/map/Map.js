import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Pressable, Text } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CustomMarker from './CustomMarker';
import config from '../../config';

const Map = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: showRightButton,
    });
  }, []);

  const showRightButton = () => {
    return (
      <Pressable
        style={styles.rightButton}
        onPress={() => {
          navigation.navigate(config.routes.SONGS);
        }}>
        <Text>Next</Text>
      </Pressable>
    );
  };

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView provider={PROVIDER_DEFAULT} style={styles.map} region={region}>
        <MapView.Marker coordinate={region}>
          <CustomMarker />
        </MapView.Marker>
      </MapView>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  map: { flex: 1, width: '100%' },
  rightButton: { right: 15 },
});
