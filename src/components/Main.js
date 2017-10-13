import React, { Component } from 'react'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="main">
        <article className="card">
          <div className="card-content">
            <h3>
              <span className="date">04 Oct</span>
              <a href="" title="">Post with Image</a>
            </h3>
            <div className="card-info">
              <span className="time">Posted at 15:55h</span>
              <span className="tag"><a href="">Business</a></span>
              <span className="post-author">by <a href="">admin</a></span>
            </div>
            <p className="post-excerpt"></p>
          </div>
          <div className="card-action">
            <a href="" type="button" className="btn btn-sm btn-primary rippler rippler-default">Read More</a>
          </div>
        </article>
        <article className="card">
          <div className="card-content">
            <h3>
              <span className="date">04 Oct</span>
              <a href="" title="">Post with Image</a>
            </h3>
            <div className="card-info">
              <span className="time">Posted at 15:55h</span>
              <span className="tag"><a href="">Business</a></span>
              <span className="post-author">by <a href="">admin</a></span>
            </div>
            <p className="post-excerpt"></p>
          </div>
          <div className="card-action">
            <a href="" type="button" className="btn btn-sm btn-primary rippler rippler-default">Read More</a>
          </div>
        </article>
        <article className="card">
          <div className="card-content">
            <h3>
              <span className="date">04 Oct</span>
              <a href="" title="">Post with Image</a>
            </h3>
            <div className="card-info">
              <span className="time">Posted at 15:55h</span>
              <span className="tag"><a href="">Business</a></span>
              <span className="post-author">by <a href="">admin</a></span>
            </div>
            <p className="post-excerpt"></p>
          </div>
          <div className="card-action">
            <a href="" type="button" className="btn btn-sm btn-primary rippler rippler-default">Read More</a>
          </div>
        </article>
      </div>
    )
  }
}