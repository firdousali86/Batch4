import React, {useEffect, useState} from 'react';
import PubNub from 'pubnub';
import {PubNubProvider, usePubNub} from 'pubnub-react';
import {Text, View, TouchableOpacity, TextInput, FlatList} from 'react-native';

const pubnub = new PubNub({
  publishKey: 'pub-c-f2919219-ac20-4403-b537-a678b79b4381',
  subscribeKey: 'sub-c-c5ddc634-c6fc-11e7-afd4-56ea5891403c',
  uuid: 'sdkjsdfgsjkhfgskjfgk',
});

const PubNubScreen = () => {
  return (
    <PubNubProvider client={pubnub}>
      <Chat />
    </PubNubProvider>
  );
};

function Chat() {
  const pubnub = usePubNub();
  const [channels] = useState(['ITC']);
  const [messages, addMessage] = useState([]);
  const [message, setMessage] = useState('');

  const handleMessage = event => {
    const message = event.message;

    if (typeof message === 'string' || message.hasOwnProperty('text')) {
      const text = message.text || message;
      addMessage(messages => [...messages, text]);
    }
  };

  const sendMessage = message => {
    if (message) {
      pubnub
        .publish({channel: channels[0], message})
        .then(() => setMessage(''));
    }
  };

  useEffect(() => {
    pubnub.addListener({message: handleMessage});
    pubnub.subscribe({channels});
  }, [pubnub, channels]);

  return (
    <View>
      <Text>test pubnub</Text>

      <TextInput
        autoComplete="off"
        autoCorrect={false}
        value={message}
        onChangeText={changedText => {
          setMessage(changedText);
        }}
        placeholder="write message"
        style={{
          margin: 10,
          backgroundColor: 'grey',
          color: 'white',
          height: 40,
          padding: 5,
        }}
      />

      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          height: 44,
        }}
        onPress={() => {
          sendMessage(message);
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Send Message
        </Text>
      </TouchableOpacity>

      <FlatList
        data={messages}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default PubNubScreen;
