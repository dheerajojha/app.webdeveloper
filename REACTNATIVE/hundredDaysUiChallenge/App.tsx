import React from 'react';
import StackNavigation from './src/Navigations/StackNavigation';
import {Provider} from 'react-redux';
// import store from './src/app/Store';
import store from "./src/Redux/Store"
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <Provider store={store}>
      {/* <Provider store={store}> */}
        <StackNavigation />
        <FlashMessage />
      {/* </Provider> */}
    </Provider>
  );
};

export default App;
