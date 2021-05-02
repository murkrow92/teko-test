import { StyleSheet } from 'react-native';
import { COOL_GREY, PALE_GREY, WHITE } from 'Themes/Colors';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';

export default StyleSheet.create({
  similarProductListBlockContainer: {
    padding: 12
  },
  similarProductListContainer: {
    marginTop: 16,
    marginBottom: 4
  },
  similarProductListHeader: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: -0.2,
    color: COOL_GREY
  },
  similarProductListSeparator: {
    width: 12
  }
});
