import { ImageProps } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

function Image(props: ImageProps) {
  return <FastImage {...props} />;
}

export default Image;
