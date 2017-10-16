import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, About } from '../components'
import { Navbar } from './snippets'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'React-sample'
    }
  }

  render() {
    const appName = this.state.name
    return (
      <div className="app" >
        <Navbar appName={appName} />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}
