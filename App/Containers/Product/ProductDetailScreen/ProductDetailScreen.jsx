import React from 'react';
import ProductDetailHeader from './ProductDetailHeader/ProductDetailHeader';

function ProductDetailScreen(props) {
  const { route } = props;
  const { productItem } = route.params;

  console.log('PRODUCT ITEM:', productItem);

  return (
    <>
      <ProductDetailHeader productItem={productItem} />
    </>
  );
}

export default ProductDetailScreen;
