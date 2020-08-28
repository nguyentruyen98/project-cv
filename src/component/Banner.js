import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../css/banner.css'


function Banner() {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item interval={0.001}>
          <img
            className="d-block w-100"
            src="http://theme.hstatic.net/1000341789/1000533258/14/slideshow_3.jpg?v=259"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={0.001}>
          <img
            className="d-block w-100"
            src="http://theme.hstatic.net/1000341789/1000533258/14/slideshow_2.jpg?v=259"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={0.001}>
          <img
            className="d-block w-100"
            src="//theme.hstatic.net/1000341789/1000533258/14/slideshow_4.jpg?v=259"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
