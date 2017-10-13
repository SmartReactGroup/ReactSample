import React from 'react'
import {
  Main,
  Slider
} from '../components'

export default class App extends React.Component {
  render() {
    return (
      <div className="middle-content">
        <Slider />
        <Main />
      </div>
      // <div className="home">
      //   <LeftNav />
      //   <div className="middle-content">
      //     <Slider />
      //     <Main />
      //   </div>
      //   <div className="right-nav">
      //     <div className="login-part">
      //       <Login />
      //     </div>
      //     <div className="top-news-info">
      //       <RightNavInfo />
      //     </div>
      //   </div>
      // </div>
    )
  }
}
