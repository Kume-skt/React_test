import React, { useState } from "react";
import { css } from "emotion";
// css in js

export function Animation() {
  const [isFlag, setFlag] = useState(true);

  const color = isFlag ? "red" : "blue";
  const size = isFlag ? "100px" : "300px";
  const textcolor = isFlag ? "Black" : "White";

  const animation_style = css({
    width: size,
    backgroundColor: color,
    transition: "1s",
    color: textcolor,
  });

  return (
    <div className={animation_style}>
      <p>test</p>
      <button onClick={() => setFlag(!isFlag)}>Change</button>
    </div>
  );
}

export function Switch() {
  const [isSwitch, setSwitch] = useState(true);
  const Switch_Style = css({
    backgroundColor: isSwitch ? "red" : "blue",
    display: "block",
    transition: "0.5s",
    width: "80px",
    height: "20px",
    borderRadius: "5px",
    color: "#fff",
    position: "relative"
  })
  const switch_contents = css({
    display: "none",
  })
  const switch_text = css({
    ':after': {
      marginLeft:"5px",
      display: 'block',
      content: `'ON　OFF'`,
    },
  })
  const switch_circle = css({
    height: "20px",
    width: "40px",
    display: "block",
    borderRadius: "5px",
    backgroundColor: "gray",
    transition: "0.3s",
    position: "absolute",
    marginLeft: isSwitch ? "0px" : "40px",
  })


  return (
    <label className={Switch_Style}>
      <input type="checkbox" onClick={() => setSwitch(!isSwitch)} className={switch_contents} />
      <span className={switch_circle}></span>
      <span className={switch_text}></span>
    </label>
  )
}