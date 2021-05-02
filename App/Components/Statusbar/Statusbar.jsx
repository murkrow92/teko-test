import React, { useEffect } from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './StatusbarStyles';

function Statusbar(props) {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
    }
  }, []);
  const currentScreenName = useSelector(state => state.theme.currentScreenName);
  const statusbarStyle = useSelector(state => state.theme.statusbarStyle);
  const additionalStyle = statusbarStyle[currentScreenName]
    ? statusbarStyle[currentScreenName]
    : statusbarStyle.ProductListScreen;

  console.log('CURRENT SCREEN NAME:', currentScreenName);

  return (
    <View style={[styles.statusbarContainer, additionalStyle]}>
      <StatusBar translucent={false} barStyle="light-content" />
    </View>
  );
}

export default Statusbar;
