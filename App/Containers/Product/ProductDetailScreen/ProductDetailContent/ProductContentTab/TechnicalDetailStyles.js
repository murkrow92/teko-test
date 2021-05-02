import { StyleSheet } from 'react-native';
import { COOL_GREY, DARK_GREY, PALE_GREY, TOMATO, WHITE } from 'Themes/Colors';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';

export default StyleSheet.create({
  technicalDetailContainer: {
    padding: 12
  },
  rowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    flexDirection: 'row'
  },
  rowGrey: {
    backgroundColor: PALE_GREY
  },
  rowWhite: {
    backgroundColor: WHITE
  },
  label: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.15,
    color: COOL_GREY
  },
  contentContainer: {
    flex: 1
  },
  content: {
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: -0.15,
    textAlign: 'right',
    color: DARK_GREY
  }
});
