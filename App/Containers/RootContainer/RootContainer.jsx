import React from 'react';
import { View } from 'react-native';
import { Provider } from '@ant-design/react-native';
import styles from 'Containers/RootContainer/RootContainerStyles';
import WithNetworkListener from 'Business/WithNetworkListener';

function RootContainer(props) {
  return (
    <Provider>
      <View style={styles.applicationView} />
    </Provider>
  );
}

export default WithNetworkListener(RootContainer);
