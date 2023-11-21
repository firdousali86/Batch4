import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useGetAllItemsQuery} from '../../services/itemApi';

const RTKQueryScreen = () => {
  const {data, error, isLoading} = useGetAllItemsQuery();

  console.log(data);

  return <View>{isLoading && <ActivityIndicator size="large" />}</View>;
};

export default RTKQueryScreen;

const styles = StyleSheet.create({});
