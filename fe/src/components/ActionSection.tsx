import styled from "styled-components";
import React, { FC } from "react";
import ActionForm from "./ActionForm";

const StyledTitle = styled.h2`
  font-weight: 400;
`;

const StyledActionSection = styled.div`
  width: 50%;
  margin: 5rem;

  @media (max-width: 800px) {
    width: auto;
  }
`;

const ActionSection: FC = () => {
  return (
    <StyledActionSection>
      <StyledTitle>Reach out to us!</StyledTitle>
      <ActionForm />
    </StyledActionSection>
  );
};

export default ActionSection;
