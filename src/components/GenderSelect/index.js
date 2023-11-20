import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function GenderSelect() {
  const [selectedGender, setSelectedGender] = useState(undefined);

  let selectedCellStyle;

  selectedCellStyle = {...styles.cell, ...styles.selectedCell};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setSelectedGender('male');
        }}
        style={selectedGender === 'male' ? selectedCellStyle : styles.cell}>
        <Text>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedGender('female');
        }}
        style={selectedGender === 'female' ? selectedCellStyle : styles.cell}>
        <Text>Female</Text>
      </TouchableOpacity>
    </View>
  );
}

//current selected value
//on selected

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
