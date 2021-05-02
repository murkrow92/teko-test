import { StyleSheet } from 'react-native';
import { WIDTH_RATIO } from 'Config/Dimens';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { COOL_GREY, DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  similarProductItemContainer: {
    backgroundColor: WHITE
  },
  productImage: {
    width: 150 * WIDTH_RATIO,
    height: 150 * WIDTH_RATIO
  },
  similarProductItemContentContainer: {
    marginTop: 8,
    maxWidth: 150 * WIDTH_RATIO
  },
  similarProductItemTitle: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.15,
    color: DARK_GREY
  },
  similarProductFinalPriceContainer: {
    marginTop: 4
  },
  similarProductDiscountContainer: {
    marginTop: 4,
    flexDirection: 'row'
  }
});
