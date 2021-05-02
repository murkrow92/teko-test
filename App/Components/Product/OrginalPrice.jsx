import { Text, View } from 'react-native';
import React from 'react';
import styles from './OriginalPriceStyles';

function OriginalPrice({ productItem }) {
  return (
    <Text style={styles.productItemOriginalPrice}>
      {productItem.originalPrice}
    </Text>
  );
}

export default OriginalPrice;
