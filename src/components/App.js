import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

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
          <LeftNav />
          <Main />
          <RightNav />
        </div>
      </div>
    )
  }
}
