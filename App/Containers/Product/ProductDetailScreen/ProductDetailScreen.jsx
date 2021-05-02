import React from 'react';
import { View } from 'react-native';
import ProductDetailHeader from './ProductDetailHeader/ProductDetailHeader';

function ProductDetailScreen(props) {
  const { route } = props;
  const { productItem } = route.params;

  console.log('PRODUCT ITEM:', productItem);

  return (
    <>
      <ProductDetailHeader productItem={productItem} />
      <View style={{ flex: 1 }} />
    </>
  );
}

export default ProductDetailScreen;
