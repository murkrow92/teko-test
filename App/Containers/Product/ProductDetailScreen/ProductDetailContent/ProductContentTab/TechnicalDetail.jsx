import React from 'react';
import { View, Text } from 'react-native';

import styles from './TechnicalDetailStyles';

function TechnicalDetail(props) {
  return (
    <View style={styles.technicalDetailContainer}>
      <View style={[styles.rowContainer, styles.rowGrey]}>
        <Text style={styles.label}>Thương hiệu</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Cooler Master</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, styles.rowWhite]}>
        <Text style={styles.label}>Bảo hành</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Cooler Master</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, styles.rowGrey]}>
        <Text style={styles.label}>Công suất</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Cooler Master</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, styles.rowWhite]}>
        <Text style={styles.label}>Bộ nhớ đệm</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Cooler Master</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, styles.rowWhite]}>
        <Text style={styles.label}>Bộ nhớ đệm</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Cooler Master</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, styles.rowWhite]}>
        <Text style={styles.label}>Bộ nhớ đệm</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>Cooler Master</Text>
        </View>
      </View>
    </View>
  );
}

export default TechnicalDetail;
