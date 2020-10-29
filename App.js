import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './navigations/NavigationContainer';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
