import { StyleSheet } from 'react-native';
import { DARK_GREY, PALE_GREY, TOMATO, WHITE } from 'Themes/Colors';
import { FONT_SF_PRO_TEXT_REGULAR } from 'Themes/Fonts';

export default StyleSheet.create({
  tabBarStyle: {
    backgroundColor: WHITE,
    borderBottomWidth: 1,
    borderBottomColor: PALE_GREY
  },
  tabLabel: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: FONT_SF_PRO_TEXT_REGULAR,
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: -0.2,
    color: DARK_GREY
  },
  indicatorStyle: {
    height: 1,
    backgroundColor: TOMATO
  },
  mockScene: {
    flex: 1,
    backgroundColor: WHITE
  }
});
