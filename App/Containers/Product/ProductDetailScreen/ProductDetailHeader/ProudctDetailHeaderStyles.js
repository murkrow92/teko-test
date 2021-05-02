import { StyleSheet } from 'react-native';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { DARK_GREY, PALE_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  productDetailHeaderContainer: {
    shadowColor: PALE_GREY,
    borderBottomWidth: 0.5,
    borderBottomColor: PALE_GREY,
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    width: '100%',
    backgroundColor: WHITE,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productDetailHeaderContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  productDetailHeaderProductTitle: {
    maxWidth: '70%',
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: -0.2,
    textAlign: 'center',
    color: DARK_GREY
  },
  productDetailHeaderPriceText: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 13,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.14,
    color: TOMATO
  }
});
