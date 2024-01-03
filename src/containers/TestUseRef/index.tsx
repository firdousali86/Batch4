import {useState, useRef} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

const TestUseRef = () => {
  const [textInput, setTextInput] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const [datevalue, setdatevalue] = useState(Date.now());

  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);

  let somevariable = useRef(0);

  console.log('NOW it rerendered');

  return (
    <View>
      <Text>test useref</Text>

      <TextInput
        ref={input1Ref}
        value={textInput}
        onChangeText={ct => {
          setTextInput(ct);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 15, padding: 5}}
      />

      <TextInput
        ref={input2Ref}
        value={textInput2}
        onChangeText={ct => {
          setTextInput2(ct);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 15, padding: 5}}
      />

      <Button
        title={'Increment'}
        onPress={() => {
          somevariable.current += 1;

          console.log(somevariable.current);

          setdatevalue(Date.now());
        }}
      />

      <Button
        title={'Focus first textinput'}
        onPress={() => {
          input1Ref?.current?.focus();
        }}
      />
      <Button
        title={'Focus second textinput'}
        onPress={() => {
          input2Ref?.current?.focus();
        }}
      />

      <Button
        title={'Clear first textinput'}
        onPress={() => {
          input1Ref?.current?.clear();
        }}
      />
      <Button
        title={'Clear second textinput'}
        onPress={() => {
          input2Ref?.current?.clear();
        }}
      />
    </View>
  );
};

export default TestUseRef;
