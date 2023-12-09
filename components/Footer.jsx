import { Button } from 'antd';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const getFullYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className='footer'>  
        <div className="socials">
          
            <div className="social-link"><Button icon={<InstagramOutlined />} type='link'></Button></div>
            <div className="social-link"><Button icon={<FacebookOutlined />} type='link'></Button></div>
            <div className="social-link"><Button icon={<TwitterOutlined />} type='link'></Button></div>
        </div>
        <div className="copy-rights">©  {getFullYear()}  KNM Timbers . All Rights Reserved.</div>
        <img src="/images/texture.png" alt="" className="footer-bg" />
    </div>
  )
}

export default Footer