import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.jsx';
import { Provider } from 'react-redux';
import { compose,  legacy_createStore as createStore, applyMiddleware } from 'redux'
import { rootReducer } from './services/reducers/index.jsx';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>
);