import { StyleSheet } from 'react-native';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { DARK_GREY, TOMATO } from 'Themes/Colors';

export default StyleSheet.create({
  quantityBlockContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  minusButtonContainer: {
    backgroundColor: 'transparent',
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8
  },
  iconMinus: {
    width: 24,
    height: 24
  },
  quantityTextContainer: {
    backgroundColor: 'transparent',
    paddingLeft: 16,
    paddingRight: 16
  },
  quantityText: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.24,
    textAlign: 'center',
    color: DARK_GREY
  },
  plusButtonContainer: {
    backgroundColor: 'transparent',
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8
  },
  iconPlus: {
    width: 24,
    height: 24
  }
});
