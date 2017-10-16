import React from 'react'
import LeftNav from './LeftNav'
import HomeMiddle from './HomeMiddle'
import RightNav from './RightNav'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <LeftNav />
        <HomeMiddle />
        <RightNav />
      </div>
    )
  }
}
