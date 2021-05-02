import { StyleSheet } from 'react-native';
import { TOMATO, WHITE } from 'Themes/Colors';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';

export default StyleSheet.create({
  productDetailContentContainer: {
    flex: 1,
    backgroundColor: WHITE
  },
  productFinalPrice: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.4,
    color: TOMATO
  }
});
