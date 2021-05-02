import React from 'react';
import { Text, View } from 'react-native';

import styles from './SimilarProductListStyles';

function SimilarProductList(props) {
  const { productItem } = props;
  return (
    <View style={styles.similarProductListContainer}>
      <Text style={styles.similarProductListHeader}>Sản phẩm cùng loại</Text>
    </View>
  );
}

export default SimilarProductList;
