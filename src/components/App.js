import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar, Home, MingXing, LeftNav, Login, RightNavInfo, TouTiao } from '../components'

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
        <div className="home">
          <LeftNav />
          <div>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/mingxing" component={MingXing} />
              <Route path="/toutiao" component={TouTiao} />
            </Switch>
          </div>
          <RightNavInfo />
        </div>

        {/* <div className="app-content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/mingxing" component={MingXing} />
          </Switch>
        </div> */}
      </div>
    )
  }
}
