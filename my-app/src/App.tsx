import React from "react";
import "./App.css";
import { css } from "emotion";

import { Counter_test } from "./component/Counter";
import { Animation ,Switch } from "./component/Animation_css";
import { Timer } from "./component/Time";

const style_base: string = css({
  textAlign: "left",
  width: "80%",
  margin: "auto",
});

function App() {
  return (
    <div className={style_base}>
      <h1>このプログラムは、テスト用です‼</h1>
      <Counter_test />
      <Animation />
      <Timer />
      <Switch/>
    </div>
  );
}

export default App;
