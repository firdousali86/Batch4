import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

export default function InputComponent({error, control, placeholder, name}) {
  return (
    <View style={styles.container}>
      <Controller
        name={name}
        control={control}
        rules={{required: true, validate: true}}
        render={({field: {onChange, value}}) => {
          return (
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
            />
          );
        }}
      />

      {error && error?.message.length > 0 && (
        <Text style={styles.errorStyle}>{error.message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: 'grey',
  },
  errorStyle: {
    marginHorizontal: 10,
    color: 'red',
  },
});
