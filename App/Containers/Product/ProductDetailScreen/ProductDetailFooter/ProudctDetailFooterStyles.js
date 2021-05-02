import { StyleSheet } from 'react-native';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { DARK_GREY, TOMATO } from 'Themes/Colors';

export default StyleSheet.create({
  productDetailHeaderContainer: {
    width: '100%',
    backgroundColor: 'white',
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
