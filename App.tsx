/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapboxNavigation from '@homee/react-native-mapbox-navigation';

function App() {
  return (
    <View style={styles.container}>
      <MapboxNavigation
        origin={[-97.760288, 30.273566]}
        destination={[-97.918842, 30.494466]}
        shouldSimulateRoute
        showsEndOfRouteFeedback
        onLocationChange={event => {
          const {latitude, longitude} = event.nativeEvent;
        }}
        onRouteProgressChange={event => {
          const {
            distanceTraveled,
            durationRemaining,
            fractionTraveled,
            distanceRemaining,
          } = event.nativeEvent;
        }}
        onError={event => {
          const {message} = event.nativeEvent;
        }}
        onCancelNavigation={() => {
          // User tapped the "X" cancel button in the nav UI
          // or canceled via the OS system tray on android.
          // Do whatever you need to here.
        }}
        onArrive={() => {
          // Called when you arrive at the destination.
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
