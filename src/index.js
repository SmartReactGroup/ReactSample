import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { App } from './components'
import configureStore from './store/configureStore'
import './components/app.scss'

const history = createBrowserHistory()
const store = configureStore()

// Start a react instance
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
