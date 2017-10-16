import React from 'react'
import { Slider, Blog } from '../../snippets'

export default class HomeMiddle extends React.Component {
  render() {
    return (
      <div className="middle-content">
        <Slider />
        <Blog />
      </div>
    )
  }
}