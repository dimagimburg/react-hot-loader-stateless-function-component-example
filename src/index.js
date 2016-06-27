import { AppContainer } from 'react-hot-loader'; // required
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {

        const NextApp = require('./App').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}