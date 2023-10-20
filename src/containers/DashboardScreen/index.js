import {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

const DashboardScreen = props => {
  const [city, setCity] = useState('');

  const [cityList, setCityList] = useState([
    {title: 'London'},
    {title: 'Birmingham'},
    {title: 'NY'},
    {title: 'LA'},
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <TextInput
        value={city}
        onChangeText={changedText => {
          setCity(changedText);
        }}
        placeholder="City"
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />

      <FlatList
        data={cityList}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 40,
                backgroundColor: 'yellow',
                marginVertical: 5,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: 'https://media.timeout.com/images/106049585/image.jpg',
                }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Settings', {
            city,
            country,
          });
        }}
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 100,
        }}>
        <Text>Goto Settings</Text>
      </TouchableOpacity>

      <Button
        title={'Add to city list'}
        onPress={() => {
          setCityList([...cityList, {title: city}]);

          setCity('');
        }}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
