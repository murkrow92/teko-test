import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { COOL_GREY, DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
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
});
