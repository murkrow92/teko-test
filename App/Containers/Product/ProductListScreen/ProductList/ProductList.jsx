import React from 'react';
import { FlatList, View } from 'react-native';

import products from 'App/Fixtures/products.json';
import ProductItem from './ProductItem';
import styles from './ProductListStyles';

function SeparatorComponent(props) {
  return <View style={styles.productListSeparator} />;
}

function ProductList(props) {
  function renderItemHistorySearchBrand({ item }) {
    return <ProductItem item={item} />;
  }

  const extract = (item, index) => index.toString();

  return (
    <FlatList
      initialNumToRender={20}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      contentContainer={styles.productListContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      data={products}
      renderItem={renderItemHistorySearchBrand}
      keyExtractor={extract}
      ItemSeparatorComponent={SeparatorComponent}
    />
  );
}

export default ProductList;
