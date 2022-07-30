import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PopularRecipe = ({ recipe }) => {
  const { title, image } = recipe;
  console.log(recipe);
  return (
    <Card>
      <p>{title}</p>
      <img src={image} alt="" />
    </Card>
  );
};

export default PopularRecipe;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
  }
`;
