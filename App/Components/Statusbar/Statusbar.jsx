import React, { useEffect } from 'react';
import { StatusBar, Platform, View } from 'react-native';

import styles from './StatusbarStyles';

function Statusbar(props) {
  useEffect(() => {
    if (Platform.OS === 'android') StatusBar.setTranslucent(true);
  }, []);

  return (
    <View style={styles.statusbarContainer}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

export default Statusbar;
