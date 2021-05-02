import React from 'react';
import WithFetchProduct from 'Business/Product/WithFetchProduct';
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

export default WithFetchProduct(ProductListScreen);
