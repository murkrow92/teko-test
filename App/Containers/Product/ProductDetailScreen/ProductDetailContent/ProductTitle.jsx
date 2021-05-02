import React from 'react';
import { View, Text } from 'react-native';
import CurrentPrice from 'Components/Product/CurrentPrice';
import OriginalPrice from 'Components/Product/OriginalPrice';
import DiscountTag from 'Components/Product/DiscountTag';
import styles from './ProductTitleStyles';

function ProductTitle(props) {
  const { productItem } = props;
  return (
    <View style={styles.productTitleContainer}>
      <Text numberOfLines={1} style={styles.productTitleText}>
        {productItem.title}
      </Text>
      <Text numberOfLines={1} style={styles.productIdLabel}>
        Mã SP: <Text style={styles.productId}>9187691276</Text>
      </Text>
      <View style={styles.badgeWrapper}>
        <View style={styles.badgeContainer}>
          <Text style={styles.stockStatus}>Tạm hết hàng</Text>
        </View>
      </View>
      <View style={styles.badgeWrapper}>
        <CurrentPrice productItem={productItem} />
        <View style={styles.space}>
          <OriginalPrice productItem={productItem} />
        </View>
        <View style={styles.space}>
          <DiscountTag productItem={productItem} />
        </View>
      </View>
    </View>
  );
}

export default ProductTitle;
