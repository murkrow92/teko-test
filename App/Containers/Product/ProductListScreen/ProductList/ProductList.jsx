import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';

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

  const products = useSelector(state => state.product.productList);
  console.log('PRODUCT LIST:', products.length);
  const isLoading = useSelector(state => state.product.isLoading);
  console.log('IS LOADING:', isLoading);
  const refreshing = products.length === 0 && isLoading;
  return (
    <FlatList
      refreshing={refreshing}
      maxToRenderPerBatch={20}
      removeClippedSubviews={true}
      initialNumToRender={20}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      style={styles.productListContainer}
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
