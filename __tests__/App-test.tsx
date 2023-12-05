/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {validatePassword} from '../src/utils';

import {render, fireEvent} from '@testing-library/react-native';
import ReactTestingComponent from '../src/components/ReactTestingComponent';
// it('renders correctly', () => {
//   renderer.create(<App />);
// });

test('case 1', () => {
  const password = '1234';

  const result = validatePassword(password);

  expect(result).toBe(false);
});

test('case 2', () => {
  const password = '123456789';

  const result = validatePassword(password);

  expect(result).toBe(false);
});

test('case 3', () => {
  const password = 'We868r6$';

  const result = validatePassword(password);

  expect(result).toBe(true);
});

test('case 4', () => {
  const password = 'We868r6hfh4545';

  const result = validatePassword(password);

  expect(result).toBe(false);
});

test('test my react component', () => {
  const {getByTestId} = render(<ReactTestingComponent />);
  const mylabel = getByTestId('mytextlabel');

  expect(mylabel).toHaveTextContent('hello we are testing RTL');
});

test('test after button press', () => {
  const {getByTestId} = render(<ReactTestingComponent />);
  const mylabel = getByTestId('mytextlabel');
  const mybutton1 = getByTestId('button1');

  fireEvent.press(mybutton1);

  expect(mylabel).toHaveTextContent('did it change');
});
