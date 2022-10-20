import styled from "styled-components";
import yellowCirclePng from "../../mats/yellow-circle.png";
import yellowCircleMidRightPng from "../../mats/yellow-circle-mid-right.png";
import pinkCirclePng from "../../mats/pink-circle.png";

export const StyledCircle = styled.div`
  position: absolute;
  background-size: contain;
`;

const TransparentCircle = styled.div`
  position: absolute;
  z-index: -1;
  opacity: 0.1;
  border-radius: 50%;
`;

const StyledYellowCircleTopLeft = styled(StyledCircle)`
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  background-image: url(${yellowCirclePng});
`;

const StyledYellowCircleMidRight = styled(StyledCircle)`
  right: calc(180px + 9rem);
  bottom: calc(20px + 9rem);
  z-index: 2;
  width: 7rem;
  height: 7rem;
  background-image: url(${yellowCircleMidRightPng});

  @media (max-width: 850px) {
    visibility: hidden;
  }
`;

const StyledPinkCircleMidRight = styled(StyledCircle)`
  right: 180px;
  bottom: 20px;
  z-index: 1;
  width: 15rem;
  height: 15rem;
  background-image: url(${pinkCirclePng});

  @media (max-width: 850px) {
    visibility: hidden;
  }
`;

const FirstTransparentCircle = styled(TransparentCircle)`
  right: 200px;
  top: 20px;
  width: 10rem;
  height: 10rem;
  background-color: #f472b7;
`;

const SecondTransparentCircle = styled(TransparentCircle)`
  right: 500px;
  top: 20px;
  width: 4rem;
  height: 4rem;
  background-color: #fad34f;
`;

const ThirdTransparentCircle = styled(TransparentCircle)`
  z-index: 3;
  bottom: 0;
  left: 300px;
  width: 8rem;
  height: 8rem;
  background-color: #fad34f;

  @media (max-width: 620px) {
    display: none;
  }
`;

const Circles = () => {
  return (
    <>
      <StyledYellowCircleTopLeft />
      <StyledYellowCircleMidRight />
      <StyledPinkCircleMidRight />
      <FirstTransparentCircle />
      <SecondTransparentCircle />
      <ThirdTransparentCircle />
    </>
  );
};

export default Circles;
