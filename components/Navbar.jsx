import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-links-wrapper">
            <Button type='link' href='#about' className="nav-link">ABOUT US</Button>
            <Button type='link' href='#products' className="nav-link">PRODUCTS</Button>
            <Button type='link' href='#materials'  className="nav-link">MATERIALS</Button>
            <Button type='link' href='#contact' className="nav-link">CONTACT</Button>
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