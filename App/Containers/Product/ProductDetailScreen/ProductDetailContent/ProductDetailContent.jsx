import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import ProductTitle from './ProductTitle';

import styles from './ProductDetailContentStyles';

function ProductDetailContent(props) {
  return (
    <ScrollView
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productDetailContentContainer}>
      <ProductTitle />
    </ScrollView>
  );
}

export default ProductDetailContent;
