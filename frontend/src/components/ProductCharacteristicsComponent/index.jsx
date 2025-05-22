import * as lucideIcons from "lucide-react";

const ProductCharacteristicsComponent = ({ characteristics }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {characteristics.map((characteristic, index) => {
        const IconComponent = lucideIcons[characteristic.icon];
        return (
          <div
            key={index}
            className="bg-base-200 flex gap-3 rounded-box p-3 border border-base-300 shadow"
          >
            <div className="flex items-center">
              {IconComponent && (
                <IconComponent className="w-6 h-6 text-primary" />
              )}
            </div>
            <div>
              <p className="text-gray-400">{characteristic.title}</p>
              <h2>{characteristic.content}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCharacteristicsComponent;
