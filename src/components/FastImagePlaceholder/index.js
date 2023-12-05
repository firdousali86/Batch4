import React, {ReactNode, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  View,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Images} from '../../themes';
import styles from './styles';

const placeholderImage = require('./placeholder.png');

interface Props {
  containerStyle?: ViewStyle;
  placeHolder?: ImageSourcePropType;
  showLoader?: boolean;
  cache?: 'immutable' | 'web' | 'cacheOnly';
  priority?: 'low' | 'normal' | 'high';
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  source?: ImageSourcePropType;
}

interface State {
  isLoading: boolean;
  isError: boolean;
}

const FastImagePlaceholder: React.FC<Props> = ({
  containerStyle = {},
  placeHolder = placeholderImage,
  showLoader = true,
  cache = 'immutable',
  priority = 'normal',
  resizeMode = 'cover',
  source,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const renderLoader = (): ReactNode => {
    if (isLoading && showLoader) {
      return (
        <View style={styles.imagePlaceholderContainer}>
          <ActivityIndicator size="small" color={'white'} />
        </View>
      );
    }

    return null;
  };

  const renderPlaceholder = (): ReactNode => {
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

  useEffect(() => {
    if (source && source.uri) {
      setIsLoading(true);
    }
  }, [source]);

  return (
    <View style={[containerStyle, {overflow: 'hidden'}]}>
      {renderPlaceholder()}
      {source && source.uri && (
        <FastImage
          style={styles.imagePlaceholderContainer}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          source={{
            uri: source.uri,
            priority: FastImage.priority[priority],
            cache: FastImage.cacheControl[cache],
          }}
          resizeMode={FastImage.resizeMode[resizeMode]}
        />
      )}

      {source && source.uri && renderLoader()}
    </View>
  );
};

export default FastImagePlaceholder;
