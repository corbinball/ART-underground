import React from "react";
import ArtworkList from "../components/ArtworkList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import ImageCarousel from "../components/Carousel/ImageCarousel";

const Home = () => {
  return (
    <div className="container, img-container">
      <ImageCarousel />
      <CategoryMenu />
      <ArtworkList />
      <Cart />
    </div>
  );
};

export default Home;
