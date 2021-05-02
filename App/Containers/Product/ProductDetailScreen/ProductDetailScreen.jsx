import React from 'react';
import ProductDetailHeader from './ProductDetailHeader/ProductDetailHeader';
import ProductDetailFooter from './ProductDetailFooter/ProductDetailFooter';
import ProductDetailContent from './ProductDetailContent/ProductDetailContent';

function ProductDetailScreen(props) {
  const { route } = props;
  const { productItem } = route.params;
  return (
    <>
      <ProductDetailHeader productItem={productItem} />
      <ProductDetailContent productItem={productItem} />
      <ProductDetailFooter productItem={productItem} />
    </>
  );
}

export default ProductDetailScreen;
