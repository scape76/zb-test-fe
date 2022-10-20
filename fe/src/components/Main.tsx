import React, { FC } from "react";
import styled from "styled-components";
import ActionSection from "./ActionSection";
import MainBackground from "./MainBackground";

const StyledMain = styled.main`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const Main: FC = () => {
  return (
    <StyledMain>
      <ActionSection />
      <MainBackground />
    </StyledMain>
  );
};

export default Main;
