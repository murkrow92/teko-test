import React from 'react';
import { View } from 'react-native';

import styles from './ProudctDetailFooterStyles';
import QuantityBlock from './QuantityBlock';
import OrderButton from './OrderButton';

function ProductDetailFooter(props) {
  const { productItem } = props;

  return (
    <View style={styles.productDetailFooterContainer}>
      <QuantityBlock productItem={productItem} />
      <OrderButton />
    </View>
  );
}

export default ProductDetailFooter;
