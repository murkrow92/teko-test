import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WithNetworkListener from 'Business/WithNetworkListener';
import ProductListScreen from 'Containers/Product/ProductListScreen/ProductListScreen';
import ProductDetailScreen from 'Containers/Product/ProductDetailScreen/ProductDetailScreen';
import styles from 'Containers/RootContainer/RootContainerStyles';

const MainStack = createStackNavigator();

function RootContainer(props) {
  return (
    <View style={styles.applicationView}>
      <NavigationContainer>
        <MainStack.Navigator
          headerMode="none"
          initialRouteName="ProductListScreen">
          <MainStack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
          />
          <MainStack.Screen
            name="ProductDetailScreen"
            component={ProductDetailScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default WithNetworkListener(RootContainer);
