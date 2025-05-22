import apple from "../../assets/apple.svg";
import samsung from "../../assets/samsung.svg";
import lg from "../../assets/lg.svg";
import sony from "../../assets/sony.svg";
import xiaomi from "../../assets/xiaomi.svg";
import nikon from "../../assets/nikon.svg";

const logos = [
  { src: apple, alt: "Apple" },
  { src: samsung, alt: "Samsung" },
  { src: lg, alt: "Lg" },
  { src: sony, alt: "Sony" },
  { src: xiaomi, alt: "Xiaomi" },
  { src: nikon, alt: "Nikon" },
];

const LogoCarousel = () => {
  return (
    <div className="bg-white p-5 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} className="h-8" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img src={logo.src} alt={logo.alt} className="h-8" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
