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
  const statusbarContentStyle = useSelector(
    state => state.theme.statusbarContentStyle
  );
  const additionalStyle = statusbarStyle[currentScreenName]
    ? statusbarStyle[currentScreenName]
    : statusbarStyle.ProductListScreen;

  const barStyle = statusbarContentStyle[currentScreenName]
    ? statusbarContentStyle[currentScreenName]
    : statusbarContentStyle.ProductListScreen;

  return (
    <View style={[styles.statusbarContainer, additionalStyle]}>
      <StatusBar translucent={false} barStyle={barStyle} />
    </View>
  );
}

export default Statusbar;
