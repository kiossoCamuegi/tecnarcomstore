import React from 'react'
import Carousel from "react-multi-carousel";
import ImageLazyLoading from '../Components/ImageLazyLoading';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


function HomeProductsSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const ProducstData = [
    "https://www.allamericancompressors.com/wp-content/uploads/atlas-copco-brand-banner-e1717631587629.jpg",
    "https://www.nairaland.com/attachments/4234600_img20160913141311_jpega00a0ca14947fe5b83ba2ea0d8fc066f",
  ];

  const Data = [
    "https://www.gemco.co.uk/wp-content/uploads/2017/08/Logo-ABAC.jpg",
    "https://aikchinhin.sg/cdn/shop/collections/balma-959587.jpg?v=1666665406",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kaeser_Kompressoren_logo.svg/1280px-Kaeser_Kompressoren_logo.svg.png",
    "https://images.squarespace-cdn.com/content/v1/613b1e508e964555dac1661b/1631877217084-G0G4AUVS68YUEMQDKU4K/FINI.jpg",
    "https://www.puska.com/content/dam/brands/Puska/Logo%20PUSKA%20(2).jpg/jcr:content/renditions/cq5dam.web.1200.628.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTbBteiE8GZoUFWcn25NfZNyP1saZ10Hg5Q&s", 
  ];


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <section>
   <div className='wo-main-carousel'>
      <div className="carousel">
        <Carousel
          swipeable={true} draggable={false} showDots={true}
          responsive={responsive} ssr={true}
          infinite={true} autoPlay={true}
          autoPlaySpeed={4000} keyBoardControl={true} customTransition="all .5" transitionDuration={6000}
          containerclassName="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListclassName="custom-dot-list-style" itemclassName="carousel-item-padding-40-px"> 
          {ProducstData.map((item, index) => {
            return (
              <Link to="#">
                <div className='carousel-element' key={index + 1}>
                  <ImageLazyLoading source={item} height={500} />
                  <div className="over-info">
                    <div className="name">Secador Kaeser Série RDX</div>
                    <div className="price-tag">746.61€ –  <s>7,970.40€ </s></div>
                  </div>
                </div>
              </Link>
            )
          })}
        </Carousel>
      </div>
    </div>
      <br /> 
      <div className="slider-container boxes-slider col">
      <Slider {...settings}>
      {Data.map((item, index) => {
            return (
              <Link key={index} to="#"> 
                  <ImageLazyLoading source={item} height={100} /> 
              </Link>
            )
          })}
      </Slider>
    </div>
    <br />
    </section>
  )
}

export default HomeProductsSlider