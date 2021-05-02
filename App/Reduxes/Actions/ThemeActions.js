import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  setStatusbarStyle: ['styleName']
});

export const ThemeTypes = Types;

export default Creators;
