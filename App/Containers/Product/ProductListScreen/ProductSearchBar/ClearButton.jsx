import React from 'react';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import doNothing from 'Utils/doNothing';
import OpacityButton from 'Components/Button/OpacityButton';
import styles from './ClearButtonStyles';

function ClearButton(props) {
  const { onPress } = props;

  return (
    <OpacityButton style={styles.clearButtonContainer} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={images.iconClose}
        style={styles.iconClose}
      />
    </OpacityButton>
  );
}

OpacityButton.defaultProps = {
  onPress: doNothing
};

export default ClearButton;
