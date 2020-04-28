import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import './styles/styles.css';

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.querySelector('#root'),
);
