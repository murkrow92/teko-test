import React from 'react';
import { FlatList, View } from 'react-native';

import products from 'App/Fixtures/products.json';
import ProductItem from './ProductItem';

function ProductList(props) {
  function renderItemHistorySearchBrand({ item }) {
    return <ProductItem item={item} />;
  }

  const extract = (item, index) => index.toString();

  return (
    <FlatList
      keyboardShouldPersistTaps="always"
      data={products}
      renderItem={renderItemHistorySearchBrand}
      keyExtractor={extract}
    />
  );
}

export default ProductList;
