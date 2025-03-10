import React from 'react';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import MainContainer from './src/MainContainer';
import store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <MainContainer /> */}
      <AppNavigator />
    </Provider>
  )
};

export default App;
