import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { ProductTypes } from 'Reduxes/Actions/ProductActions';
import products from 'Fixtures/products.json';
import score from 'string-score';

export const INITIAL_STATE = Immutable({
  isLoading: false,
  productList: products,
  query: '',
  filterProductList: products
});

export const fetchProductList = (state, action) => {
  return state.merge({
    isLoading: true
  });
};

export const fetchProductListSuccess = (state, action) => {
  const { productList } = action;
  return state.merge({
    isLoading: false,
    productList: productList
  });
};

export const fetchProductListFailure = (state, action) => {
  return state.merge({
    isLoading: false
  });
};

export const filterProductList = (state, action) => {
  const { query } = action;
  const filterResult =
    query.length > 0
      ? state.productList.filter(function (product) {
          return score(product.name, query) > 0.4;
        })
      : state.productList;

  console.log('RESULT:', filterResult.length);

  return state.merge({
    query: query,
    filterProductList: filterResult
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ProductTypes.FETCH_PRODUCT_LIST_SUCCESS]: fetchProductListSuccess,
  [ProductTypes.FETCH_PRODUCT_LIST]: fetchProductList,
  [ProductTypes.FETCH_PRODUCT_LIST_FAILURE]: fetchProductListFailure,
  [ProductTypes.FILTER_PRODUCT_LIST]: filterProductList
});
