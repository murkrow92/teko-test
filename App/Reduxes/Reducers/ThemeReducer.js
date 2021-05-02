import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ThemeTypes } from 'Reduxes/Actions/ThemeActions';

const selectorStatusbarStyle = {
  red: {
    backgroundColor: 'red'
  },
  white: {
    backgroundColor: 'white'
  }
};

export const INITIAL_STATE = Immutable({
  statusbarStyle: {
    ProductListScreen: selectorStatusbarStyle.red,
    ProductDetailScreen: selectorStatusbarStyle.white
  },
  currentScreenName: ''
});

function setCurrentScreenName(state, action) {
  const { screenName } = action;
  return state.merge({
    currentScreenName: screenName
  });
}

export const reducer = createReducer(INITIAL_STATE, {
  [ThemeTypes.SET_CURRENT_SCREEN_NAME]: setCurrentScreenName
});
