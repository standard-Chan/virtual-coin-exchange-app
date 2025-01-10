import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CoinApp from './CoinApp';
import './ui/app.css';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const store = configureStore({
    reducer: rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <CoinApp />
    </Provider>
);
