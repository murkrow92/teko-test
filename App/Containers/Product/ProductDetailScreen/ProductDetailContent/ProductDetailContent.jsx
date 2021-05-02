import React from 'react';
import { ScrollView, View } from 'react-native';
import ProductTitle from './ProductTitle';

import styles from './ProductDetailContentStyles';
import SimilarProductList from './SimilarProductList/SimilarProductList';
import ProductContentTab from './ProductContentTab/ProductContentTab';

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
      <View style={styles.sectionSpace} />
      <ProductContentTab />
      <View style={styles.sectionSpace} />
      <SimilarProductList />
      <View style={styles.sectionSpace} />
    </ScrollView>
  );
}

export default ProductDetailContent;
