import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './reducer/userReducer';
import productReducer from './reducer/productReducer';
import thunk from 'redux-thunk';


const allReducers = combineReducers({
    products: productReducer,
    users: userReducer
})

const allStoreEnhancers = compose(applyMiddleware(thunk));

const store = createStore(
    allReducers,
     {
    products: [{name: 'iphone'}],
    users: 'Mayuri' 
    },
    allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App aRandomProps='whatever'/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
