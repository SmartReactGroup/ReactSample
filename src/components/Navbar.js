import React from 'react'

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
        <button onClick={this.onShowNabar.bind(this)}>Show Navbar</button>
        {showNavbar &&  <h3> Navbar .. </h3>}
      </div>
    )
  }

}