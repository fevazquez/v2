import React from "react";

import { Timer } from "../";
import { Picture } from "../";
import { StyledMain } from "./MainQC.styled";

import electricsky from "../../img/electricsky.png";

const MainQC = () => {
  return (
    <StyledMain>
      <h1>Our Together Time (:</h1>
      <Timer />
      <Picture img={electricsky} title="EDC 2021" body="If you find this, know it was made for someone very special. Though we’re no longer together, this stays as a tribute to the beautiful memories we shared." />
    </StyledMain>
  );
};

export default MainQC;