import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Banner() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <div>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img width={'100%'} height={'500px'} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shopping-banner-template-design-4becd222cad3ce1511f32e5cd53a7dd5_screen.jpg?ts=1624509601" alt="iphone ad" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img width={"100%"} height={'500px'} src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img width={"100%"} height={'500px'} src="https://i.pinimg.com/736x/a9/0f/4d/a90f4d97743406df9fe12e4247c03861.jpg" alt="" />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner