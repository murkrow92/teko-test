import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import products from 'App/Fixtures/products.json';
import ProductItem from './ProductItem';
import styles from './ProductListStyles';

function SeparatorComponent(props) {
  return <View style={styles.productListSeparator} />;
}

function ProductList(props) {
  function renderProductItem({ item }) {
    return <ProductItem item={item} />;
  }

  const memoizedValue = useMemo(() => {
    return renderProductItem;
  }, []);

  const extract = (item, index) => index.toString();

  return (
    <FlatList
      removeClippedSubviews={true}
      initialNumToRender={20}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      contentContainer={styles.productListContainer}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      data={products}
      renderItem={memoizedValue}
      keyExtractor={extract}
      ItemSeparatorComponent={SeparatorComponent}
    />
  );
}

export default ProductList;
