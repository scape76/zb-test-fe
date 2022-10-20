import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const GlobalStyle = createGlobalStyle`{
  * {
      box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Footer />
      <Popup />
    </>
  );
}

export default App;
