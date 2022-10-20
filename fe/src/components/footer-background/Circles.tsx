import React from "react";
import styled from "styled-components";
import yellowCirclePng from "../../mats/yellow-circle.png";
import pinkCirclePng from "../../mats/pink-circle.png";
import greenCirclePng from "../../mats/green-circle.png";

import { StyledCircle } from "../main-background/Circles";

const StyledPinkCircle = styled(StyledCircle)`
  width: 15rem;
  height: 15rem;
  left: 10px;
  bottom: -5rem;
  z-index: 1;
  background-image: url(../mats/pink-circle.png);
  background-image: url(${pinkCirclePng});

  @media (max-width: 620px) {
    visibility: hidden;
  }
`;

const StyledGreenCircle = styled(StyledCircle)`
  width: 5rem;
  height: 5rem;
  right: 10rem;
  top: 0;
  z-index: 1;
  background-image: url(../mats/green-circle.png);
  background-repeat: no-repeat;
  background-image: url(${greenCirclePng});

  @media (max-width: 620px) {
    visibility: hidden;
  }
`;

const StyledYellowCircle = styled(StyledCircle)`
  width: 7rem;
  height: 7rem;
  right: -2rem;
  top: 1rem;
  background-image: url(../mats/yellow-circle.png);
  background-repeat: no-repeat;
  background-image: url(${yellowCirclePng});
`;

const Circles = () => {
  return (
    <>
      <StyledPinkCircle />
      <StyledGreenCircle />
      <StyledYellowCircle />
    </>
  );
};

export default Circles;
