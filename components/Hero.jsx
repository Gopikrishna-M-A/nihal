import HeroButton from "./HeroButton";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero" id="about">
      <div className="hero-heading">
        <div className="logo">
        <Image src="/images/logo.png" alt="" width={400} height={300} />
        </div>
        <div className="logo-text">K.N.M Timbers and Abu Saw Mill</div>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text">Specialty Wood Products</div>
          <div className="hero-img-wrapper">
            <div className="hero-img">
              {/* <img src="/images/p1.jpg" alt="" /> */}
              <Image src="/images/p1.jpg" alt="" width={400} height={300} />
            </div>
            <div className="hero-img">
              {/* <img src="/images/p2.jpg" alt="" /> */}
              <Image src="/images/p2.jpg" alt="" width={400} height={300} />
            </div>
            <div className="hero-img">
              {/* <img src="/images/p3.jpg" alt="" /> */}
              <Image src="/images/p3.jpg" alt="" width={400} height={300} />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-para">
            KNM Timbers brings extraordinary, natural wood flooring, distinctive
            furniture and unique, wooden features . We features wood products
            and handcrafted home accessories and gift. Each piece of wood has
            its own story that started long before it got to us.
          </div>
          <HeroButton />
        </div>
      </div>
      {/* <img src="/images/texture.png" alt="" className="hero-bg" /> */}
      <Image src="/images/texture.png" className="hero-bg" alt="" width={1200} height={800} />
    </div>
  );
};

export default Hero;
