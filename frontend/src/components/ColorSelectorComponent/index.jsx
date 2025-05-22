import React, { useState } from "react";

const ColorSelectorComponent = ({ colors = [], onChange }) => {
  const [selected, setSelected] = useState(colors[0] || "");

  const handleSelect = (color) => {
    setSelected(color);
    if (onChange) onChange(color);
  };

  return (
    <div className="flex gap-5 mt-4 items-center">
      <h3 className="font-semibold">Select Color:</h3>
      <div className="relative flex flex-col w-96">
        <div className="inline-flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => handleSelect(color)}
              className={`rounded-full border border-base-300 p-3.5 transition-all shadow-md hover:scale-105 ${color} cursor-pointer
                ${selected === color ? "ring-2 ring-primary scale-110" : ""}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSelectorComponent;
// This component is a color selector for a product details page.
// It allows the user to select a color from a list of available colors.
