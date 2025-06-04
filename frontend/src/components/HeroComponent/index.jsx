import iphone14 from '../../assets/iphone-14-pro-max.png';

const HeroComponent = () => {
  return (
    <section className="hero min-h-[80vh] mt-12">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">
        <img
          src={iphone14}
          alt="Shopping Illustration"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-primary">
            Limited Time Offer!
            <br />
            <span className="text-secondary">Up to 50% OFF!</span>
          </h1>
          <p className="py-6 text-base-content text-lg">
            Don’t Wait – Limited Stock at Unbeatable Prices!
          </p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
