import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { CartTypes } from 'Reduxes/Actions/CartActions';

export const INITIAL_STATE = Immutable({
  quantity: 0
});

function changeQuantity(state, action) {
  const { amount } = action;
  const { quantity } = state;
  return state.merge({
    quantity: quantity + amount
  });
}

export const reducer = createReducer(INITIAL_STATE, {
  [CartTypes.CHANGE_QUANTITY]: changeQuantity
});
