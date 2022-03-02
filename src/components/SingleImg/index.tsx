/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { FC } from "react";
import * as styles from "./styles";
import familyLogo from "../../img/familyLogo.png";

export const SingleImg: FC = () => {
  return (
    <div css={styles.container}>
      <img src={familyLogo} css={styles.img} />
      {/* <p css={imgText}>i love family guy</p> */}
    </div>
  );
};

export default SingleImg;
