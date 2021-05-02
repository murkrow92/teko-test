import React from 'react';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import OpacityButton from './OpacityButton';
import styles from './CartButtonStyles';

function CartButton(props) {
  function onPressCart() {}

  return (
    <OpacityButton onPress={onPressCart}>
      <Image source={images.iconCart} style={styles.iconCart} />
    </OpacityButton>
  );
}

CartButton.defaultProps = {};

CartButton.propTypes = {};

export default CartButton;
