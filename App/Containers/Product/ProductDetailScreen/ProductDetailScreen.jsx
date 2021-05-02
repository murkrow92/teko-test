import React from 'react';
import { View, Text } from 'react-native';

function ProductDetailScreen(props) {
  const { route } = props;
  const { productItem } = route.params;

  console.log('PRODUCT ITEM:', productItem);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default ProductDetailScreen;
