import React from 'react'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isChecked: true
    }
  }
  handleCheckboxChange(event) {
    console.log('checkbox changed!', event)
    return this.setState({ isChecked: !this.state.isChecked })
  }
  render() {
    return (
      <div className="login">
        <h3 className="login-title">Login</h3>
        <form>
          <div className="form-group">
            <span>Email address</span>
            <input type="email" placeholder="Enter email" className="form-control" />
          </div>
          <div className="form-group">
            <span>Password</span>
            <input type="password" placeholder="Password" className="form-control" />
          </div>
          <div className="checkbox c-checkbox">
            <label htmlFor="login_form_savestate">
              <input className="checkBox" onChange={() => this.handleCheckboxChange()} type="checkbox" checked={this.state.isChecked} />
              <span className="fa fa-times"></span>Check me out
            </label>
          </div>
        </form>
        <div className="card-action clearfix">
          <div className="pull-right">
            <a href="" className="btn btn-link text-primary rippler rippler-bs-default">Forgot password</a>
            <a href="" className="btn btn-primary rippler rippler-bs-default">Login</a>
          </div>
        </div>
      </div>
    )
  }
}