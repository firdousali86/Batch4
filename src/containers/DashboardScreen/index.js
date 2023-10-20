import {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const DashboardScreen = props => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

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
      />
      <TextInput
        value={country}
        onChangeText={changedText => {
          setCountry(changedText);
        }}
        placeholder="Country"
      />

      <FlatList
        data={[
          {title: 'London'},
          {title: 'Birmingham'},
          {title: 'NY'},
          {title: 'LA'},
        ]}
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
    </SafeAreaView>
  );
};

export default DashboardScreen;
