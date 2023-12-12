import {View, Text, FlatList, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {itemActions} from '../../features/item/itemSlicer';
import {kApiGetItems, kApiTodos} from '../../config/WebService';
import PostItemsForm from '../../controls/PostItemsForm';
import {ScrollView} from 'react-native-gesture-handler';

const {request, requestEvery, requestLatest, success, failure} = itemActions;

export default function ItemsCRUD() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);

  useEffect(() => {
    // ApiHelper.get(kApiGetItems)
    //   .then(response => {
    //     dispatch(success(response));
    //   })
    //   .catch(error => {
    //     dispatch(failure(error));
    //   });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Button
        title="Take First"
        onPress={() => {
          dispatch(request({url: kApiTodos}));
        }}
      />

      <Button
        title="Take Every"
        onPress={() => {
          dispatch(requestEvery({url: kApiTodos}));
        }}
      />
      <Button
        title="Take Latest"
        onPress={() => {
          dispatch(requestLatest({url: kApiTodos}));
        }}
      />
    </View>
  );
}
