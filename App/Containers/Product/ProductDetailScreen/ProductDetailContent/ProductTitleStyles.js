import { StyleSheet } from 'react-native';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import {
  COOL_GREY,
  DARK_GREY,
  DEEP_SKY_BLUE,
  PALE_GREY,
  TOMATO
} from 'Themes/Colors';

export default StyleSheet.create({
  productTitleContainer: {
    padding: 12
  },
  productTitleText: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.4,
    color: DARK_GREY
  },
  productId: {
    color: DEEP_SKY_BLUE
  },
  productIdLabel: {
    marginTop: 4,
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.1,
    color: COOL_GREY
  },
  badgeWrapper: {
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row'
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    backgroundColor: PALE_GREY
  },
  stockStatus: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: -0.1,
    color: COOL_GREY
  },
  space: {
    marginLeft: 4
  }
});
