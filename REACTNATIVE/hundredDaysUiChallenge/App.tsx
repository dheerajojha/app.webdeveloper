import React from 'react';
import StackNavigation from './src/Navigations/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/app/Store';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
