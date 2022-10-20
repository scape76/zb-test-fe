import React from "react";
import styled from "styled-components";
import mapPng from "../../mats/map.png";

const StyledSection = styled.section`
  height: 100%;
  width: 50%;

  @media (max-width: 800px) {
    width: 0;
  }
`;

const StyledMap = styled.div`
  margin-left: auto;
  min-height: 90%;
  max-width: 320px;
  background-image: url(${mapPng});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

const Map = () => {
  return (
    <StyledSection>
      <StyledMap />
    </StyledSection>
  );
};

export default Map;
