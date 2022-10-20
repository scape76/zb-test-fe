import styled from "styled-components";
import linkedInPng from "../mats/linkedin.png";
import twitterPng from "../mats/twitter.png";
import facebookPng from "../mats/facebook.png";
import pinterestPng from "../mats/pinterest.png";

const StyledSocialsListContainer = styled.div`
    margin-top: 50px;
    margin-left: 300px;
    z-index: 1;

    a + a {
        margin-left: 1rem;
    }

    @media (max-width: 700px) {
      margin: 0;
    }
}
`;

const SocialsList = () => {
  return (
    <StyledSocialsListContainer>
      <a href="https://www.linkedin.com/company/zenbit-tech/">
        <img src={linkedInPng} alt="linkedIn" />
      </a>
      <a href="https://twitter.com/zen_bit">
        <img src={twitterPng} alt="twitter" />
      </a>
      <a href="https://www.facebook.com/zenBitTech/">
        <img src={facebookPng} alt="facebook" />
      </a>
      <a href="https://zenbit.tech/">
        <img src={pinterestPng} alt="zenbit official" />
      </a>
    </StyledSocialsListContainer>
  );
};

export default SocialsList;
