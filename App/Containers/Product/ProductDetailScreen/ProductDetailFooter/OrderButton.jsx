import React from 'react';
import { View, Text } from 'react-native';

import OpacityButton from 'Components/Button/OpacityButton';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import styles from './OrderButtonStyles';

function OrderButton(props) {
  const { productItem } = props;

  return (
    <OpacityButton style={styles.orderButtonContainer}>
      <Image source={images.iconAddToCard} style={styles.iconAddToCard} />
      <Text style={styles.orderValue}>20.840.000 đ</Text>
    </OpacityButton>
  );
}

export default OrderButton;
