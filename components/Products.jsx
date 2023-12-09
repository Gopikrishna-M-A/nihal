'use client';
import { Button } from 'antd';

const Products = () => {


  const scrollToSection = (sectionId, padding = 20) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.offsetTop - padding;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };


  return (
    <div className="products-section" id="products">
      <div className="sec-title">Our Products</div>
      <div className="products-content">
        <div className="product">
          <div>
            <div className="product-title">Furniture</div>
            <div className="product-desc even">
              No matter what your personal style , we have just the right
              furniture for your living environment . KNM Timbers brings
              extraordinary, natural wood flooring, distinctive furniture and
              unique, wooden features. Furniture collections that blend classic
              style with heirloom quality.
            </div>
            <Button onClick={() => scrollToSection('contact')} type='text' className="product-contact-btn">CONTACT US</Button>
          </div>
          <div className="product-img one"><img src="/images/furniture.JPG" alt="" /></div>
        </div>
        <div className="product">
          <div>
            <div className="product-title">Logging</div>
            <div className="product-desc odd">
              Wooden walls can add spiritual simplicity to that space behind the
              bed, the one we see every night right beofre we go to sleep, warm
              the living room or seperate two different areas the dinning room.
              Natural wood connect the interiors to the peace-giving outdoors.
            </div>
            <Button onClick={() => scrollToSection('contact')} type='text' className="product-contact-btn">CONTACT US</Button>
          </div>
          <div className="product-img two"> <img src="/images/logging.JPG" alt="" /></div>
        </div>
        <div className="product">
          <div>
            <div className="product-title">Manufacturing</div>
            <div className="product-desc even">
              Solid hardwood adds charater, warmth and value to any room in your
              house. We offer exceptional wood floors that will help you enhance
              the look of your home. You can get wood floors that look shiny and
              new, or you can buy brand new wood that looks like an antique.
            </div>
            <Button onClick={() => scrollToSection('contact')} type='text' className="product-contact-btn">CONTACT US</Button>
          </div>
          <div className="product-img three"><img src="/images/manufacturing.JPG" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
