import {
  Smartphone,
  Watch,
  Camera,
  Headphones,
  Monitor,
  Gamepad,
} from "lucide-react";
import SectionHeaderComponent from "../SectionHeaderComponent";

const categories = [
  { icon: <Smartphone size={32} />, label: "Phones" },
  { icon: <Watch size={32} />, label: "Smart Watches" },
  { icon: <Camera size={32} />, label: "Cameras" },
  { icon: <Headphones size={32} />, label: "Headphones" },
  { icon: <Monitor size={32} />, label: "Computers" },
  { icon: <Gamepad size={32} />, label: "Gaming" },
];

export default function CategoriesCarouselComponent() {
  return (
    <div className="p-6">
      <SectionHeaderComponent
        title="Browse by Category"
        content="Discover all of our Availables products by category of your interest"
      />
      <div className="overflow-x-auto">
        <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="hover:scale-105 card bg-base-200 shadow-sm items-center justify-center min-w-[10rem] w-40 p-6 cursor-pointer hover:bg-base-300 transition-all rounded-lg"
            >
              <div className="text-primary">{cat.icon}</div>
              <p className="text-sm font-medium mt-2 text-center">
                {cat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
