// Header.js
import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { BsFillChatTextFill } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'

const { Header: AntHeader } = Layout;

const AppHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2"></Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className="header" style={{backgroundColor:"white"}}>
      <div className="logo">
     
        <span style={{fontWeight:"bold", color:"navy"}}><BsFillChatTextFill style={{marginRight:"10px"}}/>WhatsForm</span>
      </div>
      <Menu theme="light" mode="horizontal" className="menu">
        <Dropdown overlay={menu}>
          <Menu.Item key="1">English <DownOutlined /></Menu.Item>
        </Dropdown>
        <Menu.Item key="2">Try Demo<FaRegShareSquare style={{marginLeft:"5px"}}/></Menu.Item>
        <Menu.Item key="3">Pricing</Menu.Item>
        <Menu.Item key="4">Templates</Menu.Item>
        <Menu.Item key="5">
          <Link to="/login"><Button htmlType='submit' style={{width:"100%", height:"60%", backgroundColor:"green", color:"white",  borderRadius:"100px",fontSize: "18px", fontWeight:"bold"}}>Login</Button></Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
}

export default AppHeader;
