import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { COOL_GREY, DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

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
    backgroundColor: 'transparent'
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
  },
  originalPriceContainer: {
    marginTop: 2,
    flexDirection: 'row'
  },
  productItemOriginalPrice: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.1,
    color: COOL_GREY,
    backgroundColor: 'transparent'
  },
  productItemDiscountText: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 10,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: -0.24,
    textAlign: 'center',
    color: WHITE
  },
  discountTagContainer: {
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  triangle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 7,
    borderTopWidth: 7,
    marginLeft: -7,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: TOMATO,
    transform: [{ rotate: '-90deg' }]
  },
  discountTag: {
    marginLeft: -1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TOMATO,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 4
  }
});
