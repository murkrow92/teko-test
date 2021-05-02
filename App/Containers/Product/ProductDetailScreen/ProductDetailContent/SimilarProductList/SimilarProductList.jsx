import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

import products from 'Fixtures/products.json';
import SimilarProductItem from './SimilarProductItem';
import styles from './SimilarProductListStyles';

function SeparatorComponent(props) {
  return <View style={styles.similarProductListSeparator} />;
}

function SimilarProductList(props) {
  function renderProductItem({ item }) {
    return <SimilarProductItem item={item} />;
  }

  const memoizedValue = useMemo(() => {
    return renderProductItem;
  }, []);

  const extract = (item, index) => index.toString();

  return (
    <View style={styles.similarProductListBlockContainer}>
      <Text style={styles.similarProductListHeader}>Sản phẩm cùng loại</Text>
      <FlatList
        horizontal={true}
        maxToRenderPerBatch={20}
        removeClippedSubviews={true}
        initialNumToRender={20}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        style={styles.similarProductListContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        data={products}
        renderItem={memoizedValue}
        keyExtractor={extract}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </View>
  );
}

export default SimilarProductList;
