import {View, Text, Button} from 'react-native';
import React from 'react';
import {InputComponent, GenderSelect} from '../../components';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
  gender: yup.string().required('Gender is required'),
});

export default function UserProfileEdit() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
    },
  });

  return (
    <View style={{flex: 1}}>
      <InputComponent
        control={control}
        placeholder={'Enter First name'}
        name="firstName"
        error={errors?.firstName}
      />
      <InputComponent
        control={control}
        placeholder={'Enter Last name'}
        name="lastName"
        error={errors?.lastName}
      />
      <InputComponent
        control={control}
        placeholder={'Enter Email'}
        name="email"
        error={errors?.email}
      />
      <Controller
        name={'gender'}
        control={control}
        render={({field: {onChange, value}}) => {
          return (
            <GenderSelect
              control={control}
              value={value}
              onValueSelected={onChange}
            />
          );
        }}
      />

      <Button
        title={'Submit'}
        onPress={handleSubmit(formData => {
          console.log(formData);
        })}
      />
    </View>
  );
}
