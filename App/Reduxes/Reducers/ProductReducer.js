import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ProductTypes } from 'Reduxes/Actions/ProductActions';

export const INITIAL_STATE = Immutable({});

export const fetchProductListSuccess = (state, action) => {};

export const reducer = createReducer(INITIAL_STATE, {
  [ProductTypes.FETCH_PRODUCT_LIST_SUCCESS]: fetchProductListSuccess
});
