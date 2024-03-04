// Main.js
import React from 'react';
import { Layout, Typography } from 'antd';
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons'


const { Content } = Layout;
const { Title, Paragraph } = Typography;

const RegisterMain = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Content style={{ flex: 1, marginRight: "20px" }}>
        <Title style={{ fontSize: "16px", fontStyle: "inherit",  color:"navy", fontWeight:"bold" }}><ArrowUpOutlined />Upgrade Policy</Title>
        <Paragraph style={{fontSize:"18px", color:"navy"}}>
          If you upgrade to a higher plan, you are charged the difference between your current plan and the new one.
        </Paragraph>
      </Content>
      <Content style={{ flex: 1 }}>
        <Title style={{ fontSize: "16px", fontStyle: "inherit", color:"navy", fontWeight:"bold" }}><ArrowDownOutlined />Downgrade Policy</Title>
        <Paragraph style={{fontSize:"18px", color:"navy"}}>
          If you downgrade to a lesser plan, all your responses that exceed plan limits are safe until you return to the higher plan.
        </Paragraph>
       
      </Content>
    </div>
  );
}

export default RegisterMain;
