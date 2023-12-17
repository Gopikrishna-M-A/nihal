import { Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Link from 'next/link';

const getFullYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className='footer'>  
        <div className="socials">
            <Link href={'https://www.instagram.com/knm_woods?igshid=MmVlMjlkMTBhMg=='}><div className="social-link"><Button icon={<InstagramOutlined />} type='link'></Button></div></Link>
            <Link href={'https://wa.me/9447323647'}><div className="social-link"><Button icon={<WhatsAppOutlined />} type='link'></Button></div></Link>
            
            
        </div>
        <div className="copy-rights">©  {getFullYear()}  KNM Timbers . All Rights Reserved.</div>
        <img src="/images/texture.png" alt="" className="footer-bg" />
    </div>
  )
}

export default Footer