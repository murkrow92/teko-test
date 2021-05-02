import React from 'react';
import { View, Text } from 'react-native';
import styles from './ProductTitleStyles';

function ProductTitle(props) {
  return (
    <View style={styles.productTitleContainer}>
      <Text numberOfLines={1} style={styles.productTitleText}>
        Bộ vi xử lý/ CPU Core I7-7800X (3.50 GHz)
      </Text>
      <Text numberOfLines={1} style={styles.productIdLabel}>
        Mã SP: <Text style={styles.productId}>9187691276</Text>
      </Text>
    </View>
  );
}

export default ProductTitle;
