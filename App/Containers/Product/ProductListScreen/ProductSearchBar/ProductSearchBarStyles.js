import { StyleSheet } from 'react-native';
import { BLACK_30, TOMATO, WHITE } from 'Themes/Colors';

export default StyleSheet.create({
  productSearchBarContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: TOMATO,
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconArrowBack: {
    width: 24,
    height: 24
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginLeft: 12,
    flex: 1,
    backgroundColor: WHITE,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    shadowColor: BLACK_30,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  iconArrowSearch: {
    width: 24,
    height: 24
  },
});
