import React from 'react';
import { View } from 'react-native';

import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import styles from './ProductSearchBarStyles';

function ProductSearchBar(props) {
  return (
    <View style={styles.productSearchBarContainer}>
      <Image source={images.iconArrowBack} style={styles.iconArrowBack} />
      <View style={styles.searchInputContainer}>
        <Image source={images.iconSearch} style={styles.iconArrowSearch} />
      </View>
    </View>
  );
}

export default ProductSearchBar;
