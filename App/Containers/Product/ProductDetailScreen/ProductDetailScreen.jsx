import React from 'react';
import { View } from 'react-native';
import ProductDetailHeader from './ProductDetailHeader/ProductDetailHeader';
import ProductDetailFooter from './ProductDetailFooter/ProductDetailFooter';

function ProductDetailScreen(props) {
  const { route } = props;
  const { productItem } = route.params;

  console.log('PRODUCT ITEM:', productItem);

  return (
    <>
      <ProductDetailHeader productItem={productItem} />
      <View style={{ flex: 1 }} />
      <ProductDetailFooter productItem={productItem} />
    </>
  );
}

export default ProductDetailScreen;
