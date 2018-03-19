/* global document */
/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './actions/App';

if('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
