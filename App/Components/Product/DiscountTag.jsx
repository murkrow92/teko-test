import { Text, View } from 'react-native';
import React from 'react';
import styles from './DiscountTagStyles';

function DiscountTag({ productItem }) {
  return (
    <View style={styles.discountTagContainer}>
      <View style={styles.triangle} />
      <View style={styles.discountTag}>
        <Text style={styles.productItemDiscountText}>
          -{productItem.discountPercent}%
        </Text>
      </View>
    </View>
  );
}

export default DiscountTag;
