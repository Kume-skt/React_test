import React, { useState, useEffect } from "react";
import { css } from "emotion";

export function Counter_test() {
  const [num, setnum] = useState(0);
  const couner_style = css({
    width: "300px",
    textAlign: "center",
    background: "hsl(" + num * 10 + ",100%,50%)",
  });
  const count_option = (set_value: number) => {
    set_value > 0 ? setnum(num + set_value) : setnum(num + set_value);
  };
  return (
    <div className={couner_style}>
      <h2>カウンター</h2>
      <h3>{num}</h3>
      <button onClick={() => count_option(1)}>+</button>
      <button onClick={() => count_option(-1)}>-</button>
    </div>
  );
}
