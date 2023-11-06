import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import store from 'app/providers/storeProvider/store';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from "react-router-dom";
import './app/style/index.scss'
import 'react-loading-skeleton/dist/skeleton.css'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);
