import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import store from 'app/providers/storeProvider/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import './app/style/index.scss'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
