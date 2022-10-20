import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closePopup, selectPopupVisibility } from "../redux/mailSlice";

const StyledPopupContainer = styled.div`
  display: flex;
  text-align: center;
  padding: 0.5rem;
  flex-direction: column;
  position: absolute;
  left: 35%;
  top: 25%;
  width: 30%;
  height: 30%;
  border-radius: 10px;
  background-color: rgba(250, 250, 250, 0.9);
  box-shadow: 0px 2px 8px -5px;
`;

const StyledExitButton = styled.button`
  margin-left: auto;
  margin-top: 10px;
  margin-right: 10px;
  width: 14px;
  height: 14px;
  border: none;
  padding: 0;
  cursor: pointer;
  div {
    height: 14px;
    background-color: #000000;
    clip-path: polygon(
      10% 0%,
      0% 10%,
      40% 50%,
      0 90%,
      10% 100%,
      50% 60%,
      90% 100%,
      100% 90%,
      60% 50%,
      100% 10%,
      90% 0,
      50% 40%
    );
    box-shadow: 0px 2px 8px -5px;
  }
`;

const StyledPopupTitle = styled.h3`
  margin-top: 4vw;
`;

const Popup = () => {
  const dispatch = useAppDispatch();
  const popupVisibility = useAppSelector((state) =>
    selectPopupVisibility(state)
  );

  const PopupContainer = styled(StyledPopupContainer)`
    display: ${popupVisibility ? "flex" : "none"};
  `;

  return (
    <PopupContainer>
      <StyledExitButton onClick={() => dispatch(closePopup())}>
        <div></div>
      </StyledExitButton>
      <StyledPopupTitle>
        Thanks! We will answer your letter soon...
      </StyledPopupTitle>
    </PopupContainer>
  );
};

export default Popup;
