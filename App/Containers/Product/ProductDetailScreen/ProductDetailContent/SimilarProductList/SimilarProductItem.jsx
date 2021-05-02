import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { toDisplayObject } from 'Transforms/Product';
import Image from 'Components/FastImage/Image';
import OpacityButton from 'Components/Button/OpacityButton';
import DiscountTag from 'Components/Product/DiscountTag';
import CurrentPrice from 'Components/Product/CurrentPrice';
import OriginalPrice from 'Components/Product/OriginalPrice';
import images from 'Themes/Images';
import styles from './SimilarProductItemStyles';

function SimilarProductItem(props) {
  const { item } = props;
  const productItem = toDisplayObject(item);

  const navigation = useNavigation();

  function gotoProductDetail() {
    navigation.navigate('ProductDetailScreen', {
      productItem: productItem
    });
  }

  return (
    <OpacityButton
      onPress={gotoProductDetail}
      isDelayPressIn={true}
      style={styles.similarProductItemContainer}>
      <Image
        fallback={true}
        defaultSource={images.noImage}
        resizeMode="cover"
        source={productItem.imageSource}
        style={styles.productImage}
      />
      <View style={styles.similarProductItemContentContainer}>
        <Text numberOfLines={2} style={styles.similarProductItemTitle}>
          {productItem.title}
        </Text>
        <View style={styles.similarProductFinalPriceContainer}>
          <CurrentPrice productItem={productItem} />
        </View>
        {productItem.discountPercent > 0 ? (
          <View style={styles.similarProductDiscountContainer}>
            <OriginalPrice productItem={productItem} />
            <DiscountTag productItem={productItem} />
          </View>
        ) : (
          <View />
        )}
      </View>
    </OpacityButton>
  );
}

export default SimilarProductItem;
