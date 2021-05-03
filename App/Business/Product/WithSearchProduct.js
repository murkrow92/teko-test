import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import lodash from 'lodash';
import ProductActions from 'Reduxes/Actions/ProductActions';

function WithSearchProduct(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    function onSearch(query) {
      dispatch(ProductActions.filterProductList(query));
    }

    const onSearchDelay = lodash.debounce(onSearch, 500);

    function onChangeText(text) {
      dispatch(ProductActions.filterProductList(text));
    }

    return (
      <OriginalComponent
        {...props}
        onChangeText={onChangeText}
        onSearch={onSearchDelay}
      />
    );
  }

  return WrappedComponent;
}

export default WithSearchProduct;
