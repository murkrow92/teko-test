import React from 'react';
import { View, Text } from 'react-native';

import OpacityButton from 'Components/Button/OpacityButton';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import styles from './QuantityBlockStyles';

function QuantityBlock(props) {
  const { productItem } = props;

  function onMinusPress() {}

  function onPlusPress() {}

  return (
    <View style={styles.quantityBlockContainer}>
      <OpacityButton onPress={onMinusPress} style={styles.minusButtonContainer}>
        <Image style={styles.iconMinus} source={images.iconMinus} />
      </OpacityButton>
      <Text style={styles.quantityText}>2</Text>
      <OpacityButton onPress={onPlusPress} style={styles.plusButtonContainer}>
        <Image style={styles.iconPlus} source={images.iconPlus} />
      </OpacityButton>
    </View>
  );
}

export default QuantityBlock;
