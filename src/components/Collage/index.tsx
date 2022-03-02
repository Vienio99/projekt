/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { FC } from "react";
import * as styles from "./styles";
import familyGuy from "../../img/familyGuy.png";
import desk from "../../img/desk.jpeg";
import dog from "../../img/dog.jpg";
import logo from "../../img/logo.jpg";



export const Collage: FC = () => {
  return (
    <div css={styles.imgContainer}>
      <img src={familyGuy} css={styles.img} />
      <img src={desk} css={styles.img} />
      <img src={dog} css={styles.img} />
      <img src={logo} css={styles.img} />
    </div>
  );
};

export default Collage;
