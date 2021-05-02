import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ThemeTypes } from 'Reduxes/Actions/ThemeActions';

export const INITIAL_STATE = Immutable({
  statusbarStyle: {}
});

const selectorStatusbarStyle = {
  red: {
    backgroundColor: 'red'
  },
  white: {
    backgroundColor: 'white'
  }
};

function setStatusbarStyle(state, action) {
  const { styleName } = action;
  return state.merge({
    statusbarStyle: selectorStatusbarStyle[styleName]
      ? selectorStatusbarStyle[styleName]
      : selectorStatusbarStyle.white
  });
}

export const reducer = createReducer(INITIAL_STATE, {
  [ThemeTypes.SET_STATUSBAR_STYLE]: setStatusbarStyle
});
