import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  changeQuantity: ['productId', 'amount']
});

export const CartTypes = Types;

export default Creators;
