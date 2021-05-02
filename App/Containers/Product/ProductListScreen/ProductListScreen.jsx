import React from 'react';
import ProductSearchBar from './ProductSearchBar/ProductSearchBar';
import ProductList from './ProductList/ProductList';

function ProductListScreen() {
  return (
    <>
      <ProductSearchBar />
      <ProductList />
    </>
  );
}

export default ProductListScreen;
