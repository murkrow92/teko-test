import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import doNothing from 'Utils/doNothing';
import OpacityButton from './OpacityButton';
import styles from './BackArrowButtonStyles';

function BackArrowButton(props) {
  const navigation = useNavigation();

  function goBack() {
    const action = navigation.canGoBack() ? goBack : doNothing;
    action();
  }

  return (
    <OpacityButton onPress={goBack}>
      <Image source={images.iconArrowBack} style={styles.iconArrowBack} />
    </OpacityButton>
  );
}

BackArrowButton.defaultProps = {};

BackArrowButton.propTypes = {};

export default BackArrowButton;
