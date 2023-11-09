import {View, Text} from 'react-native';
import React from 'react';

export default function TypescriptScreen() {
  let myname: string;
  let myphone: number;
  let isDriving: boolean;
  let courses: string[];
  let scores: number[];
  let arrayofboolean: boolean[];

  myname = 'firdous';
  myphone = 34;
  isDriving = false;
  courses = ['maths', 'geography', 'physic', 'chem'];
  scores = [45, 54, 65, 67];
  arrayofboolean = [true, true, false];

  type Person = {name: string; age: number; courses?: string[]};
  type Person2 = {fullName: string; email: string; address: string};

  type CommonPerson = Person | Person2;

  let person: CommonPerson;

  person = {name: 'firdous ali', age: 36, courses: ['maths', 'physics']};
  let people: CommonPerson[];

  people = [
    {name: 'sdfsdf', age: 22, courses: ['english']},
    {name: 'sdfsdf', age: 33, courses: ['hindi']},
    {name: 'sdgsdf', age: 55},
    {fullName: 'jshf kjh kj', email: 'kgk@hjkgh.d', address: 'hjg  jhg jkg '},
  ];

  const add = (x: number, y: number): number => {
    return x + y;
  };

  const concatenate = (x: any, y: any): string => {
    return x + y;
  };

  return (
    <View>
      <Text>index</Text>
      <Text>{myname}</Text>
      <Text>{add(6, 7)}</Text>
      <Text>{concatenate('firdous', 'ali')}</Text>
    </View>
  );
}
