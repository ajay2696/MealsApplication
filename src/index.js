/* global document */
/* global window */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers/appReducer';
import {Provider} from 'react-redux';

const store= createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);
ReactDOM.render(
    <Provider store ={store} >
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
