import React, { useState } from 'react';
import { View, useWindowDimensions, Text, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap, PagerScroll } from 'react-native-tab-view';
import { TOMATO } from 'Themes/Colors';

import styles from './ProductContentTabStyles';
import TechnicalDetail from './TechnicalDetail';

function FirstRoute() {
  return <View style={styles.mockScene} />;
}

function ThirdRoute() {
  return <View style={styles.mockScene} />;
}

function TabLabel({ color, label }) {
  return <Text style={styles.tabLabel}>{label}</Text>;
}

function ProductContentTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Mô tả sản phẩm' },
    { key: 'second', title: 'Thông số kỹ thuật' },
    { key: 'third', title: 'So sánh giá' }
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: TechnicalDetail,
    third: ThirdRoute
  });

  function renderLabel({ route, focused, color }) {
    return <TabLabel label={route.title} color={color} />;
  }

  function renderTabBar(props) {
    function onLongPress(scene) {
      const { route } = scene;
      props.jumpTo(route.key);
    }

    function renderPager(pagerProps) {
      return <PagerScroll {...pagerProps} />;
    }

    function onTabPress() {}

    return (
      <TabBar
        {...props}
        style={styles.tabBarStyle}
        indicatorStyle={styles.indicatorStyle}
        renderLabel={renderLabel}
        onTabPress={onTabPress}
        activeColor={TOMATO}
        inactiveColor="transparent"
        renderPager={renderPager}
        onTabLongPress={onLongPress}
      />
    );
  }

  return (
    <TabView
      renderTabBar={renderTabBar}
      swipeEnabled={true}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: 1000 }}
    />
  );
}

export default ProductContentTab;
