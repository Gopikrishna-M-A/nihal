'use client';
import { Button } from 'antd';

const HeroButton = () => {

    const scrollToSection = (sectionId, padding = 20) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          const offsetTop = section.offsetTop - padding;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      };


  return (
          <Button onClick={() => scrollToSection('contact')}  size='large' type='primary' block className='hero-btn'>CONTACT US</Button>
  )
}

export default HeroButton