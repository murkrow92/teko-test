import { StyleSheet } from 'react-native';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';
import { DARK_GREY, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  orderButtonContainer: {
    marginLeft: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8,
    backgroundColor: TOMATO,
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconAddToCard: {
    width: 24,
    height: 24
  },
  orderValue: {
    flex: 1,
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: -0.4,
    textAlign: 'right',
    color: WHITE
  }
});
