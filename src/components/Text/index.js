// @flow
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Platform, StyleSheet, Text as TextRN} from 'react-native';
import {Colors, Fonts} from '../../themes';

const Text = props => {
  const {style, color, size, type, textAlign, children, ...rest} = props;
  const textStyle = StyleSheet.flatten([
    {
      textAlign,
      fontFamily: Fonts.type[type],
      fontSize: size in Fonts.size ? Fonts.size[size] : size,
      color: Colors.text[color] || color,
      backgroundColor: Colors.transparent,
    },
    style,
  ]);

  return (
    <TextRN style={textStyle} {...rest}>
      {children}
    </TextRN>
  );
};

Text.propTypes = {
  ...TextRN.propTypes,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(_.keys(Fonts.size)),
    PropTypes.number,
  ]),
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(_.keys(Fonts.type)),
  textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
};

Text.defaultProps = {
  ...TextRN.defaultProps,
  size: Platform.OS == 'ios' ? 'small' : 'normal',
  type: 'base',
  color: Colors.descriptionColor,
  textAlign: 'left',
};

export default Text;
