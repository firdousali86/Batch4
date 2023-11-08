import {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {ApiHelper} from '../../helpers';
import {kApiTodos} from '../../config/WebService';

const TestApiScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiHelper.get(kApiTodos)
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>test</Text>

      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.userId}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestApiScreen;
