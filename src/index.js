
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import './index.module.css';
import App from './components/App/App';
import Spinner from './components/Spinner/Spinner';


ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate
      loading={<Spinner />}
      persistor={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider >,
  document.getElementById('root'),
);

