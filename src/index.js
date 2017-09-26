import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { App } from './components'
import './assets/styles/main.scss'

const history = createBrowserHistory()

// Start a react instance
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
