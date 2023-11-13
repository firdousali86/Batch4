import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {itemActions} from '../../features/item/itemSlicer';
import {kApiGetItems} from '../../config/WebService';
import {ApiHelper} from '../../helpers';

const {request, success, failure} = itemActions;

export default function ItemsCRUD() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.item);

  useEffect(() => {
    dispatch(request());

    ApiHelper.get(kApiGetItems)
      .then(response => {
        dispatch(success(response));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  }, []);

  return (
    <View>
      <FlatList
        data={item.items}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginVertical: 5,
                marginHorizontal: 10,
                backgroundColor: 'pink',
              }}>
              <Text>{item.id}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.title}</Text>
                <Text>{item.details}</Text>
              </View>

              <Text>{item.image}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
