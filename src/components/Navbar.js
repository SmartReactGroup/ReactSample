import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavbar: true
    }
  }

  componentWillMount() {
    // ...
    console.log('componentWillMount..')
  }

  componentDidMount() {
    console.log('componentDidMount..')
  }

  onShowNabar() {
    this.setState({
      showNavbar: !this.state.showNavbar
    })
  }

  render() {
    console.log('render..')
    const showNavbar = this.state.showNavbar

    return (
      <div className="navbar">
        <h1>{this.props.appName}</h1>
        <NavLink to="/about">about</NavLink>
        <button onClick={this.onShowNabar.bind(this)}>Show Navbar</button>
        {showNavbar && <h3> Navbar .. </h3>}
      </div>
    )
  }

}