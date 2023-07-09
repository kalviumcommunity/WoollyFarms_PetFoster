import React from "react";
import { useNavigate } from "react-router-dom";

const Arrow = () => {
  const goTo = useNavigate();
  return (
    <div
      class="center-con"
      onClick={() => {
        window.scrollTo(0, 500);
        goTo("/");
      }}
    >
      <div class="round">
        <div id="cta">
          <span class="arrow primera next "></span>
          <span class="arrow segunda next "></span>
        </div>
      </div>
    </div>
  );
};

export default Arrow;
