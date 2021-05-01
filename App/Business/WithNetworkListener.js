import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import NetworkActions from 'Reduxes/Actions/NetworkActions';

function WithNetworkListener(OriginalComponent) {
  function WrappedComponent(props) {
    const dispatch = useDispatch();

    useEffect(networkListener, []);

    function networkListener() {
      const unsubscribe = NetInfo.addEventListener(onConnectionChange);
      return () => {
        unsubscribe();
      };
    }

    function onConnectionChange(connectionInfo) {
      dispatch(NetworkActions.changeConnectionState(connectionInfo));
    }

    return <OriginalComponent {...props} />;
  }

  return WrappedComponent;
}

export default WithNetworkListener;
