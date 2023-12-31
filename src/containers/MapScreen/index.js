import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState, useRef} from 'react';
import {MapViewControl} from '../../components';

const markers = [
  {latitude: '37.794861', longitude: '-122.4106587', title: 'some location 1'},
  {latitude: '37.8078486', longitude: '-122.4102691', title: 'some location 2'},
  {latitude: '37.8278286', longitude: '-122.4102791', title: 'some location 3'},
  {latitude: '37.8378486', longitude: '-122.4102691', title: 'some location 4'},
  {latitude: '37.8578486', longitude: '-122.4302691', title: 'some location 5'},
  {latitude: '37.8878486', longitude: '-122.4502691', title: 'some location 6'},
];

export default function MapScreen() {
  const mapControlRef = useRef(null);
  const [myMapMarkers, setMyMapMarkers] = useState(markers);

  return (
    <View style={{flex: 1}}>
      <MapViewControl
        ref={mapControlRef}
        markers={myMapMarkers}
        onLongPress={arg => {
          const {coordinate} = arg.nativeEvent;

          setMyMapMarkers([...myMapMarkers, coordinate]);
        }}
      />
      <Button
        title={'Navigate to some place'}
        onPress={() => {
          mapControlRef.current.mytestmethod();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
