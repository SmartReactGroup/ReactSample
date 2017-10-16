import React, { Component } from 'react'
import { Login } from '../../snippets'

export default class RightNav extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="right-nav">
        <div className="login-part">
          <Login />
        </div>
        <div className="right-nav-content">
          <h3>This is right nav content</h3>
        </div>
      </div>
    )
  }
}