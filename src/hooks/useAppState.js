import { useCallback, useState } from 'react';

const useAppState = () => {
  const [appStatus, setAppStatus] = useState([]);

  const loadingState = (type, id) => {
    setAppStatus(prev => [
      ...prev,
      {
        type,
        id,
        status: 'LOADING',
        errorMessage: '',
      },
    ]);
  };

  const successState = (type, id) => {
    setAppStatus(prev => prev.filter(x => !(x.type === type && x.id === id)));
  };

  const errorState = (type, err, id) => {
    setAppStatus(prev =>
      prev.map(x =>
        x.type === type && x.id === id ? { ...x, status: 'ERROR', errorMessage: err.message } : x,
      ),
    );
  };

  const clearError = useCallback(id => {
    setAppStatus(prev => prev.filter(x => x.id !== id));
  }, []);

  return {
    appStatus,
    loadingState,
    successState,
    errorState,
    clearError,
  };
};

export default useAppState;
