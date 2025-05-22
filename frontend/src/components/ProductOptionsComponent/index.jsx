import { useState } from "react";

const ProductOptionsComponent = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0] || "");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex mt-6 gap-4">
      {options.map((option) => (
        <button
          key={option}
          className={`w-full px-4 py-2 border border-base-300 rounded-md bg-base-200 shadow hover:scale-110 transition-all cursor-pointer ${
            option === selectedOption ? "ring-2 ring-primary scale-110" : ""
          }`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ProductOptionsComponent;
