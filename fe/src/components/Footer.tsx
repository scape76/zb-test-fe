import React from "react";
import styled from "styled-components";
import SocialsList from "./SocialsList";
import FooterBackground from "./FooterBackground";

const StyledFooter = styled.footer`
  overflow: hidden;
  position: relative;
  margin-top: auto;
  height: 20vh;
  width: 100%;
  background-color: #fafafa;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <SocialsList />
      <FooterBackground />
    </StyledFooter>
  );
};

export default Footer;
