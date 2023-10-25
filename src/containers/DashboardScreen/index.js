import {useState, useEffect} from 'react';
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
    {city: 'London'},
    {city: 'Birmingham'},
    {city: 'NY'},
    {city: 'LA'},
  ]);

  useEffect(() => {
    console.log('=========');
    console.log(props.route.params);
    console.log('=========');
  }, [props.route.params]);

  console.log('dashboard screen got rerendered');

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
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Settings', {
                  city: item.title,
                  country: 'somecountry',
                });
              }}
              style={{
                height: 40,
                backgroundColor: 'blue',
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
                <Text>{item.city}</Text>
              </View>
            </TouchableOpacity>
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

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('testClassComp');
        }}>
        <Text>Push class component</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('hookEffectScreen');
        }}>
        <Text>Push Functional component</Text>
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
