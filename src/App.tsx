import {RootNavigation} from '@Navigation';
import {store} from '@Store';
import * as React from 'react';
import {Provider} from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
