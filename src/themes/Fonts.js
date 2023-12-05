// @flow
// Android
// title 20
// Heading 16
// desc 14

// ios
// title 20
// Heading 20
// desc 17

import {Platform} from 'react-native';
import Metrics from './Metrics.js';
const type = {
  // base: Platform.OS == "ios" ? "Helvetica" : "Roboto",
  // base: "Poppins-Light",
  base: 'Montserrat-Regular',
  neris: 'Neris-Light',
  heading: 'Neris-SemiBold',
  description: 'Montserrat-Regular',
  semiBold: 'Poppins-SemiBold',
  bold: 'Montserrat-Bold',
  medium_poppins: 'Montserrat-Medium',
  light_poppins: 'Poppins-Light',
  regular: Platform.OS == 'ios' ? 'OpenSans' : 'OpenSans-Regular',
  heavy:
    Platform.OS == 'ios'
      ? 'OpenSans-SemiboldItalic'
      : 'OpenSans-SemiboldItalic_0',
  medium: 'Montserrat-Medium',
  light: 'OpenSans-Light',
  book: 'OpenSans-Bold',
  black: 'Avenir-Black',
  normal: 'OpenSans-Regular',
  extraBold: 'OpenSans-ExtraBold',
  schoolBell: Platform.OS == 'ios' ? 'Schoolbell' : 'Schoolbell-pMMy',
};

// Metrics.generatedFontSize(ios, android)

const size = {
  xxxxxxSmall: Metrics.generatedFontSize(7),
  xxxxxSmall: Metrics.generatedFontSize(9),
  xxxxSmall: Metrics.generatedFontSize(11),
  xxxSmall: Metrics.generatedFontSize(12),
  xxSmall: Metrics.generatedFontSize(13),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  xnormal: Metrics.generatedFontSize(16),
  normal: Metrics.generatedFontSize(17),
  medium: Metrics.generatedFontSize(18),
  large: Metrics.generatedFontSize(20),
  xLarge2: Metrics.generatedFontSize(22),
  xLarge: Metrics.generatedFontSize(24),
  xLarge3: Metrics.generatedFontSize(25),
  xLarge4: Metrics.generatedFontSize(28),
  xxLarge1: Metrics.generatedFontSize(30),
  xxLarge12: Metrics.generatedFontSize(32),

  xxLarge: Metrics.generatedFontSize(34),
  xxLarge2: Metrics.generatedFontSize(36),
  xxxLarge: Metrics.generatedFontSize(40),
  xxxxLarge: Metrics.generatedFontSize(60),
};

export default {
  type,
  size,
};
