import React from 'react';
import { View, Text } from 'react-native';
import BackArrowButton from 'Components/Button/BackArrowButton';
import CartButton from 'Components/Button/CartButton';

import styles from './ProudctDetailHeaderStyles';

function ProductDetailHeader(props) {
  const { productItem } = props;

  console.log('PRODUCT ITEM:', productItem);

  return (
    <View style={styles.productDetailHeaderContainer}>
      <BackArrowButton isBlack={true} />
      <View style={styles.productDetailHeaderContentContainer}>
        <Text numberOfLines={1} style={styles.productDetailHeaderProductTitle}>
          {productItem.title}
        </Text>
        <Text style={styles.productDetailHeaderPriceText}>
          {productItem.displayPrice} đ
        </Text>
      </View>
      <CartButton />
    </View>
  );
}

export default ProductDetailHeader;
