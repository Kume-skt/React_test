import React, { useState, useEffect } from "react";
import { css } from "emotion";

const Time_style = css({});

export function Timer() {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    function tick() {
      setClock(new Date());
    }
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  },[clock]);
  function time_text() {
        var Year = clock.getFullYear();
        var Month = clock.getMonth() + 1;
        var Date = clock.getDate();
        var Hour = clock.getHours();
        var Min = clock.getMinutes();
        var Sec = clock.getSeconds();
        return `${Year}年${Month}月${Date}日${Hour}時${Min}分${Sec}秒`;
    }
  return (
    <div className={Time_style}>
      <h2>日本時刻</h2>
      <p>{time_text()}</p>
    </div>
  );
}
