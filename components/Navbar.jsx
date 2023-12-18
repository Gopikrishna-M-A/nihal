'use client';

import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react'; // Import useState to manage the drawer visibility

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false); // State to manage drawer visibility

  const scrollToSection = (sectionId, padding = 20) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetTop = section.offsetTop - padding;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      // Close the drawer after clicking a menu item
      setDrawerVisible(false);
    }
  };

  return (
    <div className='nav'>
      <div className="nav-links-wrapper">
        <Button onClick={() => scrollToSection('about')} type='text' className="nav-link">ABOUT US</Button>
        <Button onClick={() => scrollToSection('products')} type='text' className="nav-link">SERVICES</Button>
        <Button onClick={() => scrollToSection('materials')} type='text' className="nav-link">MATERIALS</Button>
        <Button onClick={() => scrollToSection('contact')} type='text' className="nav-link">CONTACT</Button>
      </div>
      <div className="menu-icon" onClick={() => setDrawerVisible(true)}>
        <MenuOutlined />
      </div>

      {/* Drawer for the responsive menu */}
      <Drawer
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        closable={true} // Disable the close button
        className='menu-drawer'
      >
        <div block onClick={() => scrollToSection('about')} type='text' className="drawer-nav-link">ABOUT US</div>
        <div block onClick={() => scrollToSection('products')} type='text' className="drawer-nav-link">SERVICES</div>
        <div block onClick={() => scrollToSection('materials')} type='text' className="drawer-nav-link">MATERIALS</div>
        <div block onClick={() => scrollToSection('contact')} type='text' className="drawer-nav-link">CONTACT</div>
      </Drawer>
    </div>
  );
}

export default Navbar;
