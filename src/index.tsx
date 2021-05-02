import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import App from './App'
import { store } from './Global/Store'

import './styles/main.scss'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ToastProvider autoDismissTimeout={2000}>
                <App />
            </ToastProvider>
        </Router>
    </Provider>
    ,document.getElementById("app"))