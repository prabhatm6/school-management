import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "styled-components";

const Loading = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="loading">
      <BeatLoader
        css={override}
        size={20}
        color={"#123abc"}
        loading={true}
      />
    </div>
  );
};

export default Loading;
