import React from 'react';
import StackNavigation from './src/Navigations/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/app/Store';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
      <FlashMessage />
    </Provider>
  );
};

export default App;
