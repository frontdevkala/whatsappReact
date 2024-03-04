// Footer.js
import React from 'react';
import { Layout, Menu } from 'antd';

const { Footer: AntFooter } = Layout;

const AppFooter = () => {
  return (
    <AntFooter className="footer" style={{backgroundColor:"white"}}>
   
   <div className="logo">
     
        <span style={{fontSize:"18px"}}>© micro.company</span>
      </div>
      <Menu mode="horizontal" className="menu">
     
        <Menu.Item key="contact-us"><a href="#">Contact us</a></Menu.Item>
        <Menu.Item key="help-center"><a href="#">Help Center</a></Menu.Item>
        <Menu.Item key="system-status"><a href="#">System Status</a></Menu.Item>
        <Menu.Item key="privacy-policy"><a href="#">Privacy Policy</a></Menu.Item>
        <Menu.Item key="terms"><a href="#">Terms</a></Menu.Item>
      </Menu>
    </AntFooter>
  );
}

export default AppFooter;
