import React, { useState } from "react";
import Slider from "react-slick";
import ProductItem from "../ProductItem";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function ImageCarousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // arrows: false,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // infinite: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  const images = [
    {
      id: 1,
      imageSrc: "./images/DA_CoolGuy.JPG",
      alt: "Cool Guy",
      title: "Cool Guy",
      description: "A cool looking guy",
      pricingText: 120,
      artist: "Valerie Brisendine",
    },
    {
      id: 2,
      imageSrc: "./images/DA_CoolGuyMouse.JPG",
      alt: "Cool Mouse Guy",
      title: "Cool Mouse Guy",
      description: "A cool looking mouse",
      pricingText: 120,
      artist: "Andrew Tran",
    },
    {
      id: 3,
      imageSrc: "./images/DA_HalfFace.JPG",
      alt: "Half Face",
      title: "Half Face",
      description: "A guy with half a face",
      pricingText: 120,
      artist: "Valerie Brisendine",
    },
    {
      id: 4,
      imageSrc: "./images/DA_TattooLady.JPG",
      alt: "Tattoo Lady",
      title: "Tattoo Lady",
      description: "A lady with tattoos",
      pricingText: 120,
      artist: "Valerie Brisendine",
    },
  ];

  console.log(images);

  return (
    <div className="content">
      <h2>Drawings</h2>
      <div className="controls">
        <button onClick={sliderRef?.slickPrev}>
          <FaArrowLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaArrowRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image.imageSrc} alt={image.title} className="art-image" />
            <div className="text-info">
              <div className="art-header">
                <h2>{image.title}</h2>
                <span>{image.pricingText}</span>
              </div>
              <p>{image.description}</p>
            </div>
            <button>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
