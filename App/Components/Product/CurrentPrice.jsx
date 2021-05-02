import { Text, View } from 'react-native';
import React from 'react';
import styles from './CurrentPriceStyles';

function CurrentPrice({ productItem }) {
  return (
    <View style={styles.currentPriceContainer}>
      <Text style={styles.currentPrice}>
        {productItem.displayPrice}
      </Text>
      <Text style={styles.priceSymbol}> đ</Text>
    </View>
  );
}

export default CurrentPrice;
