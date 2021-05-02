import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductActions from 'Reduxes/Actions/ProductActions';

function WithFetchProduct(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(ProductActions.fetchProductList());
    }, [dispatch]);

    return <OriginalComponent {...props} />;
  }

  return WrappedComponent;
}

export default WithFetchProduct;
