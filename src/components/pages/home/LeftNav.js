import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LeftNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: window.location.pathname.substring(1)
    }
  }

  setFilter(filter) {
    this.setState({ selected: filter })
  }

  isActive(value) {
    const isActive = (value === this.state.selected) ? 'active' : 'default'
    const className = `link-item ${isActive}`
    return className
  }

  render() {
    return (
      <div className="left-nav">
        <div className="list-group">
          <ul>
            <div>
              <li className="list-group-item">
                <Link className={this.isActive('')} to="/" onClick={this.setFilter.bind(this, '')}>热门</Link>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <Link className={this.isActive('mingxing')} to="/mingxing" onClick={this.setFilter.bind(this, 'mingxing')}>明星</Link>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <Link className={this.isActive('toutiao')} to="/toutiao" onClick={this.setFilter.bind(this, 'toutiao')}>头条</Link>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">视频</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">新鲜事</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">榜单</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">搞笑</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">社会</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">情感</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">时尚</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">军事</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">美女</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">体育</a>
              </li>
            </div>
            <div>
              <li className="list-group-item">
                <a className="link-item">动漫</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}