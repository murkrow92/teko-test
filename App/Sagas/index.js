import { all } from 'redux-saga/effects';

import productSagas from './ProductSagas';

export default function* root() {
  yield all([productSagas]);
}
