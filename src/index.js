import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routers/App';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css"
import { Provider } from 'react-redux'
import { store } from './store/store';
import regeneratorRuntime from "regenerator-runtime";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
