import React from 'react'
import Slider from 'react-slick'

export default class Silder extends React.Component {
  // constructor() {
  //   super()
  //   // this.state = {
  //   //   dots: true,
  //   //   infinite: true,
  //   //   speed: 500,
  //   //   slidesToShow: 1,
  //   //   slidesToScroll: 1
  //   // }
  // }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider {...settings}>
        <div><img alt="slider1" src="/assets/lib/images/slider1.jpg" /></div>
        <div><img alt="slider2" src="/assets/lib/images/slider2.jpg" /></div>
        <div><img alt="slider3" src="/assets/lib/images/slider3.jpg" /></div>
      </Slider>
    )
  }
}

