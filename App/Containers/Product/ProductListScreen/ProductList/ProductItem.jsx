import React from 'react';
import { View, Text } from 'react-native';
import { toDisplayObject } from 'Transforms/Product';
import Image from 'Components/FastImage/Image';
import OpacityButton from 'Components/Button/OpacityButton';
import styles from './ProductItemStyles';

function ProductItem(props) {
  const { item } = props;
  const productItem = toDisplayObject(item);
  console.log('item:', item);
  return (
    <OpacityButton style={styles.productItemContainer}>
      <Image
        resizeMode="cover"
        source={productItem.imageSource}
        style={styles.productImage}
      />
      <View style={styles.productItemContentContainer}>
        <Text numberOfLines={2} style={styles.productItemTitle}>
          {productItem.title}
        </Text>
      </View>
    </OpacityButton>
  );
}

export default ProductItem;
