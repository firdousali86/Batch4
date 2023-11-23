import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

class LocationHelper {
  fetchLocation = (success, failure) => {
    Geolocation.getCurrentPosition(
      position => {
        success(position);
      },
      error => {
        // See error code charts below.
        failure(error);
      },
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
    );
  };

  trackUserLocation = (success, failure) => {};

  checkLocationPermission = (success, failure) => {
    check(
      Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
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
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
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
