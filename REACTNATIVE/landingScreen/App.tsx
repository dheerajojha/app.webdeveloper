import React from 'react';
import StackNavigation from './Src/Navigations/StackNavigation';
import {Provider} from 'react-redux';
import store from './Src/Redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
