import React from 'react'
import Slider from 'react-slick'

export default class Silder extends React.Component {
  constructor() {
    super()
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      source: [
        '/assets/lib/images/slider1.jpg',
        '/assets/lib/images/slider2.jpg',
        '/assets/lib/images/slider3.jpg'
      ]
    }
  }
  render() {
    const { source, settings } = this.state
    return (
      <Slider {...settings}>
        {source.map(image => <div key={image}><img alt="slider1" src={image} /></div>)}
      </Slider>
    )
  }
}

