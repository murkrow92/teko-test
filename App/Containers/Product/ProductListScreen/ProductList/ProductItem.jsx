import React from 'react';
import { View } from 'react-native';
import { toDisplayObject } from 'Transforms/Product';
import styles from './ProductItemStyles';

function ProductItem(props) {
  const { item } = props;
  const productItem = toDisplayObject(item);
  console.log('item:', item);
  return <View style={styles.productItemContainer} />;
}

export default ProductItem;
