import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar, About, Home } from '../components'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'React example'
    }
  }

  render() {
    const appName = this.state.name
    return (
      <div className="app" >
        <Navbar appName={appName} />
        <div className="content">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    )
  }
}
