import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchProductList: [],
  fetchProductListSuccess: [],
  fetchProductListFailure: [],
  filterProduct: ['query']
});

export const ProductTypes = Types;

export default Creators;
