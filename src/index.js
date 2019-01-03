import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import './index.css';

localStorage.lang = 'en';
const language = (localStorage.lang === 'zh') ? null : enUS;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LocaleProvider locale={language}>
                <div>
                    <App />
                </div>
            </LocaleProvider>
        </ConnectedRouter>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
