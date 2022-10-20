import React, { FC } from "react";
import Circles from "./main-background/Circles";
import Clouds from "./main-background/Clouds";
import Map from "./main-background/Map";
const MainBackground: FC = () => {
  return (
    <>
      <Circles />
      <Clouds />
      <Map />
    </>
  );
};

export default MainBackground;
