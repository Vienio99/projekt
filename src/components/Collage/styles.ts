/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const imgContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 2fr))",
});

export const img = css({
  width: "100%",
  height: "auto"
});