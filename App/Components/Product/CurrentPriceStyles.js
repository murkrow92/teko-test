import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { COOL_GREY, DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  currentPriceContainer: {
    flexDirection: 'row'
  },
  currentPrice: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.4,
    color: TOMATO
  },
  priceSymbol: {
    marginTop: -2,
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.4,
    color: TOMATO
  }
});
