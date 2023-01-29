import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

import { Router } from './Router';

import './index.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
