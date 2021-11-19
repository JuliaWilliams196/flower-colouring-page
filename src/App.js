import React, { useState } from "react";
import "./styles.css";
import Flower from "../components/sunflower.js";
import ColorPalette from "../components/ColorPalette";

const colors = () => {
  const [fillColors, setFillColors] = useState(Array(22).fill("white"));
  const [currentColor, setCurrentColor] = useState("plum");

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  };
  return (
    <div className="colors">
      <div className="Flower">
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor} />
    </div>
  );
};
export default colors;
