import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  changeQuantity: ['amount']
});

export const CartTypes = Types;

export default Creators;
