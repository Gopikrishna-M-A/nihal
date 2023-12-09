'use client';
import { Button } from 'antd';

const ProductButton = ({ proId, text }) => {


  const scrollToSection = (sectionId, padding = 20) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.offsetTop - padding;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };


  return (
    <Button onClick={() => scrollToSection('contact')} type='text' className="product-contact-btn">CONTACT US</Button>
  )
}

export default ProductButton