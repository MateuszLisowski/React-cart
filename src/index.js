import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
