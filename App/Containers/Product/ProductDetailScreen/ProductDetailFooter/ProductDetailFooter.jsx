import React from 'react';
import { View } from 'react-native';

import styles from './ProudctDetailFooterStyles';
import QuantityBlock from './QuantityBlock';

function ProductDetailFooter(props) {
  const { productItem } = props;

  return (
    <View style={styles.productDetailFooterContainer}>
      <QuantityBlock productItem={productItem} />
    </View>
  );
}

export default ProductDetailFooter;
