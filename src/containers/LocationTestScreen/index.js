import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {LocationHelper} from '../../helpers';

export default function LocationTestScreen() {
  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = () => {
    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.trackUserLocation(
          position => {
            console.log(position);
          },
          error => {
            console.log(error);
          },
        );
      },
      error => {
        console.log(error);
      },
    );
  };

  return (
    <View>
      <Text>index</Text>
      <Button
        title={'Fetch location'}
        onPress={() => {
          fetchLocation();
        }}
      />
    </View>
  );
}
