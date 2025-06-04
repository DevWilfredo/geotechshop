const ProductOptionsComponent = ({ options, selected, onChange }) => {
  return (
    <div className="flex mt-6 gap-4">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={`w-full px-4 py-2 border border-base-300 rounded-md bg-base-200 shadow hover:scale-110 transition-all cursor-pointer ${
            option.id === selected ? "ring-2 ring-primary scale-110" : ""
          }`}
          onClick={() => onChange(option.id)}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

export default ProductOptionsComponent;
