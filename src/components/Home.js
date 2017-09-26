import React from 'react'
import {
  Main,
  LeftNav,
  RightNav
} from '../components'

export default class App extends React.Component {
  render() {
    return (
      <div className="home" >
        <LeftNav />
        <Main />
        <RightNav />
      </div>
    )
  }
}
