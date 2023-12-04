import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const FirestoreTestScreen = () => {
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot(documentSnapshot => {
        console.log(documentSnapshot);
      });

    return () => subscriber();
  }, []);

  return (
    <View>
      <Button
        title={'Fetch one record'}
        onPress={() => {
          firestore()
            .collection('Users')
            .doc('1WiHClZXzZR73Ymh2fcn')
            .get()
            .then(data => {
              console.log(data);

              console.log(data.id);
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />
      <Button
        title={'Fetch all records'}
        onPress={() => {
          firestore()
            .collection('Users')
            .get()
            .then(data => {
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />
      <Button
        title={'POST'}
        onPress={() => {
          firestore()
            .collection('Users')
            .add({
              name: 'Ada Lovelace',
              age: 30,
              phone: '34534534534',
              email: null,
              address: {street: '', area: ''},
            })
            .then(() => {
              console.log('User added!');
            });
        }}
      />

      <Button
        title={'UPDATE'}
        onPress={() => {
          firestore()
            .collection('Users')
            .doc('FJB4JeHnS56Z0anEzYz1')
            .update({
              name: 'this is updated record',
              age: 40,
              phone: '333333333',
            })
            .then(() => {
              console.log('User added!');
            });
        }}
      />

      <Button
        title={'new entity post'}
        onPress={() => {
          firestore()
            .collection('Users2')
            .add({
              id: '45345345',
              name: 'Ada Lovelace',
              age: 30,
              phone: '34534534534',
              email: null,
              address: {street: '', area: ''},
            })
            .then(() => {
              console.log('User added!');
            });
        }}
      />

      <Button
        title={'fetch new entity'}
        onPress={() => {
          firestore()
            .collection('Users2')
            .doc('45345345')
            .get()
            .then(data => {
              console.log(data);

              console.log(data.id);
            })
            .catch(err => {
              console.log(err);
            });
        }}
      />
    </View>
  );
};

export default FirestoreTestScreen;

const styles = StyleSheet.create({});
