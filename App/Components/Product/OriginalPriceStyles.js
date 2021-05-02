import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { COOL_GREY, DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  productItemOriginalPrice: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.1,
    color: COOL_GREY,
    backgroundColor: 'transparent',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
});
