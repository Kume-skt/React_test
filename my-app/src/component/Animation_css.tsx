import React, { useState } from "react";
import { css } from "emotion";

export function Animation() {
  const [isFlag, setFlag] = useState(true);

  const color = isFlag ? "red" : "blue";
  const size = isFlag ? "100px" : "300px";
  const animation_style = css({
    width: size,
    backgroundColor: color,
    transition: "1s",
  });
  return (
    <div className={animation_style}>
      <p>test</p>
      <button onClick={() => setFlag(!isFlag)}>Change</button>
    </div>
  );
}
