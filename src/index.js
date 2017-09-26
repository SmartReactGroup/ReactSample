import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

import {
  App,
  About
} from './components'
import './styles/main.scss'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">BasicRouting</NavLink></li>
          <li><NavLink to="/blocking" activeClassName="active">Blocking</NavLink></li>
          <li><NavLink to="/miss" activeClassName="active">Miss</NavLink></li>
          <li><NavLink to="/query-params" activeClassName="active">Query Params</NavLink></li>
          <li><NavLink to="/recursive-paths" activeClassName="active">Recursive Paths</NavLink></li>
        </ul>

        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

// Start a react instance
ReactDOM.render(<Root />, document.getElementById('root'))
