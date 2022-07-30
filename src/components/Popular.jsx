import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

import styled from "styled-components";
import PopularRecipe from "./PopularRecipe";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  // const [popular, setPopular] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setPopular(data.recipes));
  // }, []);
  // console.log(popular);

  const { data: popular, isLoading } = useQuery(["popularFood"], () =>
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(popular);
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.recipes?.map((recipe) => (
            <SplideSlide>
              <PopularRecipe recipe={recipe}></PopularRecipe>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;

const Wrapper = styled.div`
  margin: 4rem 0;
`;
