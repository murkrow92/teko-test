import React from 'react';
import { ScrollView } from 'react-native';
import ProductTitle from './ProductTitle';

import styles from './ProductDetailContentStyles';

function ProductDetailContent(props) {
  const { productItem } = props;
  return (
    <ScrollView
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productDetailContentContainer}>
      <ProductTitle productItem={productItem} />
    </ScrollView>
  );
}

export default ProductDetailContent;
