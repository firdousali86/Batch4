import React, {useState, useEffect} from 'react';

// Importing essential react-native components
import {
  Alert,
  Text,
  Animated,
  StyleSheet,
  InteractionManager,
  View,
} from 'react-native';

// The total time taken by the animation
// is 5000millisecond or 5seconds.
const useFadeIn = (duration = 5000) => {
  // Keeping the opacity 0 at the start
  // of the animation
  const [opacity] = useState(new Animated.Value(0));

  // Running the animation only on the first render
  useEffect(() => {
    // Changing the opacity value from
    // 0 to 1 over the duration of 5 seconds.
    Animated.timing(opacity, {
      toValue: 1,
      duration,
    }).start();
  }, []);

  return opacity;
};

const Square = ({onShown}) => {
  const opacity = useFadeIn();

  // Running a method after the animation
  useEffect(() => {
    // Scheduling onShown() task
    const interactionPromise = InteractionManager.runAfterInteractions(() =>
      onShown(),
    );

    return () => interactionPromise.cancel();
  }, []);

  // Square Shape
  return <Animated.View style={[styles.square, {opacity}]} />;
};

// We will be scheduling onShown()
// function using Interaction Manager.
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>"Square Fade In Animation"</Text>
      <Square
        onShown={() =>
          Alert.alert(
            'The animations ' + 'Task is done and displaying this alert now!!!',
          )
        }
      />
    </View>
  );
};

// Styles for text and Square shape
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  txt: {
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default App;
