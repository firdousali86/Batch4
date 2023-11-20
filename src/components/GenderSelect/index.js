import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

const genderArray = [
  {
    key: 'male',
    title: 'Male',
  },
  {key: 'female', title: 'Female'},
];

export default function GenderSelect(props) {
  const [selectedGender, setSelectedGender] = useState(props?.value);

  useEffect(() => {
    setSelectedGender(props?.value);
  }, [props?.value]);

  let selectedCellStyle;

  selectedCellStyle = {...styles.cell, ...styles.selectedCell};

  return (
    <View style={styles.container}>
      {genderArray.map(thisEl => {
        return (
          <TouchableOpacity
            onPress={() => {
              setSelectedGender(thisEl.key);

              if (props.onValueSelected) {
                props.onValueSelected(thisEl.key);
              }
            }}
            style={
              selectedGender === thisEl.key ? selectedCellStyle : styles.cell
            }>
            <Text>{thisEl.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  selectedCell: {backgroundColor: 'grey'},
  cell: {
    flex: 1,
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
