import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import WithSearchProduct from 'Business/Product/WithSearchProduct';
import Image from 'Components/FastImage/Image';
import BackArrowButton from 'Components/Button/BackArrowButton';
import images from 'Themes/Images';
import { COOL_GREY } from 'Themes/Colors';
import styles from './ProductSearchBarStyles';
import doNothing from 'Utils/doNothing';
import ClearButton from './ClearButton';

function ProductSearchBar(props) {
  const { onChangeText } = props;

  console.log('ON CHANGE TEXT:', onChangeText);

  return (
    <View style={styles.productSearchBarContainer}>
      <BackArrowButton />
      <View style={styles.searchInputContainer}>
        <Image source={images.iconSearch} style={styles.iconArrowSearch} />
        <TextInput
          placeholder="Nhập tên, mã sản phẩm"
          placeholderTextColor={COOL_GREY}
          blurOnSubmit
          numberOfLines={1}
          selectionColor="white"
          underlineColorAndroid="transparent"
          autoFocus
          keyboardType="default"
          style={styles.searchInput}
          onChangeText={onChangeText}
        />
        <ClearButton />
      </View>
    </View>
  );
}

ProductSearchBar.defaultProps = {
  onChangeText: doNothing,
  onDeletePress: doNothing,
  onBackPress: doNothing
};

ProductSearchBar.propTypes = {
  onChangeText: PropTypes.func,
  onDeletePress: PropTypes.func,
  onBackPress: PropTypes.func
};

export default WithSearchProduct(ProductSearchBar);
