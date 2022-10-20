import React, { FC, useState } from "react";
import { Mail } from "../redux/mailSlice";
import styled from "styled-components";
import { useAppDispatch } from "../hooks";
import { saveNewMail } from "../redux/mailSlice";

const StyledActionForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  input {
    min-width: 200px;
    height: 50px;
    padding: 8px;
    padding-left: 16px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
  }

  input::placeholder {
    color: #000;
  }

  input:nth-child(3) {
    height: 90px;
  }

  input + input {
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  height: 3.5rem;
  width: 10rem;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 50px;
  background-color: #fad34f;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1;
`;

const ActionForm: FC = () => {
  const dispatch = useAppDispatch();

  const [nameValue, handleNameValueChange] = useState("");
  const [emailValue, handleEmailValueChange] = useState("");
  const [messageValue, handleMessageValueChange] = useState("");

  const handleButtonClick = (event: any) => {
    event.preventDefault();
    if (!nameValue || !emailValue || !messageValue) {
      alert("all of the fields have to be filled");
      return;
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      alert("email is not valid");
      return;
    }

    const mail: Mail = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };

    dispatch(saveNewMail(mail));

    handleNameValueChange("");
    handleEmailValueChange("");
    handleMessageValueChange("");
  };

  return (
    <StyledActionForm onSubmit={(e) => handleButtonClick(e)}>
      <input
        type="text"
        placeholder="Your name*"
        value={nameValue}
        onChange={(e) => handleNameValueChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your e-mail*"
        value={emailValue}
        onChange={(e) => handleEmailValueChange(e.target.value)}
      />
      <input
        type="textarea"
        placeholder="Your message*"
        value={messageValue}
        onChange={(e) => handleMessageValueChange(e.target.value)}
      />
      <StyledButton>Send message</StyledButton>
    </StyledActionForm>
  );
};

export default ActionForm;
