import React from "react";

export default function ColorPalette(props) {
  const colours = [
    "lightpink",
    "coral",
    "red",
    "firebrick",
    "gold",
    "orange",
    "darkgoldenrod",
    "forestgreen",
    "darkcyan",
    "purple",
    "rebeccapurple"
  ];

  return (
    <div className="color-palette">
      {colours.map((color) => {
        const activeClass =
          props.currentColor === color ? "color-swatch-active" : "";
        return (
          <div
            onClick={() => {
              props.changeColor(color);
            }}
          >
            <div
              className={`color-swatch${activeClass}`}
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
