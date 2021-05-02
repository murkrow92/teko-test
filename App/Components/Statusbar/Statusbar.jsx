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

  const statusbarStyle = useSelector(state => state.theme.statusbarStyle);
  return (
    <View style={[styles.statusbarContainer, statusbarStyle]}>
      <StatusBar translucent={false} barStyle="light-content" />
    </View>
  );
}

export default Statusbar;
