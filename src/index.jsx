import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './stores'

import App from './containers/App'

const store = createStore(rootReducer)
const root = document.getElementById('root')

import './styles/style.scss'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
)
