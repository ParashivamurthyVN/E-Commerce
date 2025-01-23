import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import cartItemReducer from './cartItem';


const store =configureStore({
 reducer:{
    cartItems:cartItemReducer
 }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
