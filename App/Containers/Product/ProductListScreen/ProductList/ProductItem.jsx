import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Highlighter from 'react-native-highlight-words';
import { useSelector } from 'react-redux';

import { toDisplayObject } from 'Transforms/Product';
import Image from 'Components/FastImage/Image';
import OpacityButton from 'Components/Button/OpacityButton';
import images from 'Themes/Images';
import styles from './ProductItemStyles';
import CurrentPrice from 'Components/Product/CurrentPrice';
import OriginalPrice from 'Components/Product/OriginalPrice';
import DiscountTag from 'Components/Product/DiscountTag';

function DiscountBlock({ productItem }) {
  const { discountPercent } = productItem;
  return discountPercent > 0 ? (
    <View style={styles.originalPriceContainer}>
      <OriginalPrice productItem={productItem} />
      <DiscountTag productItem={productItem} />
    </View>
  ) : (
    <View />
  );
}

function ProductItem(props) {
  const { item } = props;
  const productItem = toDisplayObject(item);

  const navigation = useNavigation();

  function gotoProductDetail() {
    navigation.navigate('ProductDetailScreen', {
      productItem: productItem
    });
  }

  const query = useSelector(state => state.product.query);
  const queryPieces = query.split(' ');

  return (
    <OpacityButton
      onPress={gotoProductDetail}
      isDelayPressIn={true}
      style={styles.productItemContainer}>
      <Image
        fallback={true}
        defaultSource={images.noImage}
        resizeMode="cover"
        source={productItem.imageSource}
        style={styles.productImage}
      />
      <View style={styles.productItemContentContainer}>
        <Text numberOfLines={2} style={styles.productItemTitle}>
          <Highlighter
            highlightStyle={styles.highlight}
            searchWords={queryPieces}
            textToHighlight={productItem.title}
          />
        </Text>
        <View style={styles.finalPriceContainer}>
          <CurrentPrice productItem={productItem} />
        </View>
        <DiscountBlock productItem={productItem} />
      </View>
    </OpacityButton>
  );
}

export default ProductItem;
