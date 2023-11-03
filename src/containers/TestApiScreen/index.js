import {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const TestApiScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(x => x.json())
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
