import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ThemeActions from 'Reduxes/Actions/ThemeActions';

function WithStatusbarChange(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    function onStateChange(state) {
      const { index, routeNames } = state;
      const currentScreenName = routeNames[index] ? routeNames[index] : '';
      dispatch(ThemeActions.setCurrentScreenName(currentScreenName));
    }

    return <OriginalComponent {...props} onStateChange={onStateChange} />;
  }

  return WrappedComponent;
}

export default WithStatusbarChange;
