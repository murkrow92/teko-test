import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Image from 'Components/FastImage/Image';
import images from 'Themes/Images';
import doNothing from 'Utils/doNothing';
import OpacityButton from './OpacityButton';
import styles from './BackArrowButtonStyles';

function BackArrowButton(props) {
  const navigation = useNavigation();
  const { isBlack } = props;

  function goBack() {
    const action = navigation.canGoBack() ? goBack : doNothing;
    action();
  }

  const source = isBlack ? images.iconArrowBackBlack : images.iconArrowBack;

  return (
    <OpacityButton onPress={goBack}>
      <Image source={source} style={styles.iconArrowBack} />
    </OpacityButton>
  );
}

BackArrowButton.defaultProps = {
  isBlack: false
};

BackArrowButton.propTypes = {
  isBlack: PropTypes.bool
};

export default BackArrowButton;
