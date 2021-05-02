import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  productItemContainer: {
    backgroundColor: WHITE,
    padding: 12,
    flexDirection: 'row'
  },
  productImage: {
    width: 80 * WIDTH_RATIO,
    height: 80 * WIDTH_RATIO
  },
  productItemContentContainer: {
    flex: 1,
    paddingLeft: 12,
    flexDirection: 'column',
    backgroundColor: 'gold'
  },
  productItemTitle: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.15,
    color: DARK_GREY
  },
  finalPriceContainer: {
    marginTop: 4,
    flexDirection: 'row'
  },
  productItemFinalPrice: {
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
