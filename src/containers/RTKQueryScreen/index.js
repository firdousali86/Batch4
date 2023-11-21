import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import React from 'react';
import {useGetAllItemsQuery, usePostItemMutation} from '../../services/itemApi';

const RTKQueryScreen = () => {
  const {data, error, isLoading} = useGetAllItemsQuery();
  const [postItem, {isLoading: isUpdating}] = usePostItemMutation();

  console.log(data);

  return (
    <View>
      {isLoading && <ActivityIndicator size="large" />}

      <Button
        title={'Add item'}
        onPress={() => {
          console.log('add item');

          const newItem = {
            title: 'string',
            image: 'string',
            details: 'string',
          };

          postItem(newItem);
        }}
      />
    </View>
  );
};

export default RTKQueryScreen;

const styles = StyleSheet.create({});
