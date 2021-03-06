import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const configurestore = store();



ReactDOM.render(
<Provider store={configurestore}>
    <App />
</Provider>, document.getElementById('root'));

