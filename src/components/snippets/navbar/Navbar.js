import React from 'react'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavbar: true
    }
  }

  render() {

    return (
      <div className="navbar">
        <nav className="navbar navbar-inverse open-hover">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="">Brand</a>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="">Action</a></li>
                  <li><a href="">Another action</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Dropdown header</li>
                  <li><a href="">Separated link</a></li>
                  <li><a href="">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="">Link</a></li>
              <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="">Action</a></li>
                  <li><a href="">Another action</a></li>
                  <li><a href="">Something else here</a></li>
                  <li><a href="">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}