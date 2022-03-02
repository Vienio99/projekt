/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { FC } from "react";
import * as styles from "./styles";
import { Link } from "react-router-dom";

interface DescriptionProps {
  header: string;
  header2: string;
  description: string;
}


export const Description: FC<DescriptionProps> = (props) => {
  return (
    <div css={styles.descriptionContainer}>
      <h1 css={styles.header}>{props.header}</h1>
      <h2 css={styles.header2}>{props.header2}</h2>
      <div css={styles.text}>{props.description}</div>
      <Link to="/votes">
        <button css={styles.btn}>ZOBACZ WIĘCEJ</button>
      </Link>
    </div>
  );
};

export default Description;
