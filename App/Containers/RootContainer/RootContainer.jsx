import React from 'react';
import { View } from 'react-native';
import WithNetworkListener from 'Business/WithNetworkListener';

import Statusbar from 'Components/Statusbar/Statusbar';
import styles from 'Containers/RootContainer/RootContainerStyles';
import Router from './Router';

function RootContainer(props) {
  return (
    <View style={styles.applicationView}>
      <Statusbar />
      <Router />
    </View>
  );
}

export default WithNetworkListener(RootContainer);
