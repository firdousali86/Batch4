import Geolocation from '@react-native-community/geolocation';
import {Platform} from 'react-native';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

class LocationHelper {
  watchId = undefined;

  unMount = () => {
    if (this.watchId) {
      Geolocation.clearWatch(this.watchId);
    }
  };

  fetchLocation = (success, failure) => {
    Geolocation.getCurrentPosition(
      locationData => {
        success(locationData);
      },
      error => {
        failure(error);
      },
      {
        enableHighAccuracy: false,
      },
    );
  };

  trackUserLocation = (success, failure) => {
    this.watchId = Geolocation.watchPosition(
      locationData => {
        success(locationData);
      },
      error => {
        failure(error);
      },
      {
        interval: 1000,
        // fastestInterval?: number;
        // timeout: 5000,
        // maximumAge: 2000,
        enableHighAccuracy: false,
        // distanceFilter?: number;
        useSignificantChanges: true,
      },
    );
  };

  checkLocationPermission = (success, failure) => {
    check(
      Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      }),
    )
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            break;
          case RESULTS.DENIED:
            this.requestPermission(success, failure);
            break;
          case RESULTS.GRANTED:
            success();
          case RESULTS.BLOCKED:
            this.requestPermission(success, failure);
        }
      })
      .catch(error => {
        failure(error);
      });
  };

  requestPermission = (success, failure) => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    )
      .then(result => {
        success(result);
      })
      .catch(error => {
        failure(error);
      });
  };
}

export default new LocationHelper();
