import { Button } from 'antd';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero" id='about'>
      <div className="hero-heading">
        <div className="logo"></div>
        <div className="logo-text">K.N.M Timbers and Abu Saw Mill</div>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text">Specialty Wood Products</div>
          <div className="hero-img-wrapper">
            <div className="hero-img"><img src="/images/p1.jpg" alt="" /></div>
            <div className="hero-img"><img src="/images/p2.jpg" alt="" /></div>
            <div className="hero-img"><img src="/images/p3.jpg" alt="" /></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-para">
            KNM Timbers brings extraordinary, natural wood flooring, distinctive
            furniture and unique, wooden features . We features wood products
            and handcrafted home accessories and gift. Each piece of wood has
            its own story that started long before it got to us.
          </div>
          <Link href={'#contact'}><Button size='large' type='primary' block className='hero-btn'>CONTACT US</Button></Link>
        </div>
      </div>
      <img src="/images/texture.png" alt="" className="hero-bg" />
    </div>
  );
};

export default Hero;
