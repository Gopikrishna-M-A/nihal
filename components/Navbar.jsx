'use client';

import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const Navbar = () => {

  const scrollToSection = (sectionId, padding = 20) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.offsetTop - padding;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  
  return (
    <div className='nav'>
        <div className="nav-links-wrapper">
            <Button onClick={() => scrollToSection('about')}   type='text' className="nav-link">ABOUT US</Button>
            <Button onClick={() => scrollToSection('products')}  type='text' className="nav-link">PRODUCTS</Button>
            <Button onClick={() => scrollToSection('materials')} type='text'   className="nav-link">MATERIALS</Button>
            <Button onClick={() => scrollToSection('contact')}   type='text' className="nav-link">CONTACT</Button>
        </div>
        <div  className="menu-icon"><MenuOutlined /></div>
        <div className="menu">
            <Button type='link' href='#about' className="nav-link">ABOUT US</Button>
            <Button type='link' href='#products' className="nav-link">PRODUCTS</Button>
            <Button type='link' href='#materials'  className="nav-link">MATERIALS</Button>
            <Button type='link' href='#contact' className="nav-link">CONTACT</Button>
        </div>
    </div>
  )
}

export default Navbar