import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductListScreen from 'Containers/Product/ProductListScreen/ProductListScreen';
import ProductDetailScreen from 'Containers/Product/ProductDetailScreen/ProductDetailScreen';

const MainStack = createStackNavigator();

function Router() {
  return (
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
  );
}

export default Router;
