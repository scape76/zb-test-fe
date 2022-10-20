import React from "react";
import styled from "styled-components";
import cloudPng from "../../mats/cloud.png";

const StyledCloud = styled.div`
  position: absolute;
  background-image: url(${cloudPng});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 620px) {
    display: none;
  }
`;

const FirstCloud = styled(StyledCloud)`
  opacity: 0.6;
  left: 120px;
  bottom: 20px;
  width: 10rem;
  height: 10rem;
`;

const SecondCloud = styled(StyledCloud)`
  opacity: 0.4;
  top: 20px;
  left: 190px;
  width: 10rem;
  height: 10rem;
`;

const ThirdCloud = styled(StyledCloud)`
  opacity: 0.5;
  left: -70px;
  bottom: 120px;
  width: 10rem;
  height: 10rem;
`;

const FourthCloud = styled(StyledCloud)`
  opacity: 0.5;
  right: 560px;
  bottom: 180px;
  width: 10rem;
  height: 10rem;
`;

const FifthCloud = styled(StyledCloud)`
  opacity: 0.5;
  right: 20px;
  bottom: 5px;
  width: 10rem;
  height: 10rem;
`;

const Clouds = () => {
  return (
    <>
      <FirstCloud />
      <SecondCloud />
      <ThirdCloud />
      <FourthCloud />
      <FifthCloud />
    </>
  );
};

export default Clouds;
