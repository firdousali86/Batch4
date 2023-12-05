// @flow
import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, Image, View, ViewPropTypes} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Images} from '../../themes';
import styles from './styles';

const placeholderImage = require('./placeholder.png');

export default class FastImagePlaceholder extends React.Component {
  static propTypes = {
    containerStyle: ViewPropTypes.style,
    placeHolder: PropTypes.any,
    showLoader: PropTypes.bool,
    cache: PropTypes.oneOf(['immutable', 'web', 'cacheOnly']),
    priority: PropTypes.oneOf(['low', 'normal', 'high']),
    resizeMode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'center']),
  };

  static defaultProps = {
    containerStyle: {},
    placeHolder: placeholderImage,
    showLoader: true,
    cache: 'immutable',
    priority: 'normal',
    resizeMode: 'cover',
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isError: false,
    };
  }

  renderLoader = () => {
    const {isLoading} = this.state;
    const {showLoader} = this.props;

    if (isLoading && showLoader) {
      return (
        <View style={styles.imagePlaceholderContainer}>
          <ActivityIndicator size="small" color={'white'} />
        </View>
      );
    }

    return null;
  };

  renderPlaceholder = () => {
    const {placeHolder, source} = this.props;
    const {isLoading, isError} = this.state;

    if (isLoading || isError || !(source && source.uri)) {
      return (
        <View
          style={[
            styles.imagePlaceholderContainer,
            {backgroundColor: '#d5d5d5'},
          ]}>
          <Image
            source={placeHolder}
            style={styles.imagePlaceholder}
            resizeMethod={'auto'}
            resizeMode={'contain'}
          />
        </View>
      );
    }

    return null;
  };

  render() {
    const {containerStyle, source, priority, cache, resizeMode} = this.props;

    return (
      <View style={[containerStyle, {overflow: 'hidden'}]}>
        {this.renderPlaceholder()}
        {source && source.uri && (
          <FastImage
            style={styles.imagePlaceholderContainer}
            onLoadStart={() => {
              this.setState({isLoading: true});
            }}
            onLoad={e => {
              this.setState({isLoading: false});
            }}
            onLoadEnd={() => {
              this.setState({isLoading: false});
            }}
            source={{
              uri: source.uri,
              priority: FastImage.priority[priority],
              cache: FastImage.cacheControl[cache],
            }}
            onError={() => {
              this.setState({isError: true});
            }}
            resizeMode={FastImage.resizeMode[resizeMode]}
          />
        )}

        {source && source.uri && this.renderLoader()}
      </View>
    );
  }
}
