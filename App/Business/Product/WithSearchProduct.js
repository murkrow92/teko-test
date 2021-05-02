import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductActions from 'Reduxes/Actions/ProductActions';

function WithSearchProduct(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    function onSearch(query) {
      dispatch(ProductActions.filterProductList(query));
    }

    function onChangeText(text) {
      console.log('ON CHANGE TEXT:', text);
      dispatch(ProductActions.filterProductList(text));
    }

    return (
      <OriginalComponent
        {...props}
        onChangeText={onChangeText}
        onSearch={onSearch}
      />
    );
  }

  return WrappedComponent;
}

export default WithSearchProduct;
