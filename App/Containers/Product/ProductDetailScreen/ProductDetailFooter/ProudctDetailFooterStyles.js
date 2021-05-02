import { StyleSheet } from 'react-native';
import { hasNotch } from 'Config/Dimens';

export default StyleSheet.create({
  productDetailFooterContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hasNotch ? 28 : 8
  },
  iconAddToCard: {
    width: 24,
    height: 24
  }
});
