import React, { useState } from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap, PagerScroll } from 'react-native-tab-view';
import { TOMATO } from 'Themes/Colors';

import styles from './ProductContentTabStyles';

const FirstRoute = () => <View style={{ flex: 1, backgroundColor: 'blue' }} />;

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'orange' }} />
);

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
    second: SecondRoute,
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
      initialLayout={{ width: layout.width }}
    />
  );
}

export default ProductContentTab;
