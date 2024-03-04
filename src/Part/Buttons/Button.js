import React, { useState } from "react";
import { Table, Button, Space } from 'antd';
import {CheckOutlined} from '@ant-design/icons'
import { TbArrowSharpTurnLeft } from "react-icons/tb";

const MyComponent = () => {
  const [showFirstTable, setShowFirstTable] = useState(false);
  const [showSecondTable, setShowSecondTable] = useState(false);

  const toggleFirstTable = () => {
    setShowFirstTable(!showFirstTable);
    setShowSecondTable(false); // Hide the second table when the first button is clicked
  };

  const toggleSecondTable = () => {
    setShowSecondTable(!showSecondTable);
    setShowFirstTable(false); // Hide the first table when the second button is clicked
  };

  const columns1 = [
    {
      title: '',
      dataIndex: 'good',
      key: 'good',
    },
    {
      title: 'Free',
      dataIndex: 'Free',
      key: 'Free',
    },
    {
      title: 'Lite',
      dataIndex: 'Lite',
      key: 'Lite',
    },
    {
      title: 'Standard',
      dataIndex: 'Standard',
      key: 'standard',
    },
    {
      title: 'Plus',
      dataIndex: 'Plus',
      key: 'Plus',
    },
  ];

  const data1 = [
    {
      key: 1,
      Free: '$0',
      Lite: '$12',
      Standard: '$24',
      Plus: '$49',
    },
    {
      key: 2,
      Free: 'Forever',
      Lite: 'Per Month',
      Standard: "Per Month",
      Plus: 'Per Month',
    },
    {
      key: 3,
      Lite: 'Billed Monthly',
     Standard: "Billed Monthly",
     Plus: "Billed Monthly"
    },
    {
      key: 4,
      good: "Responses via WhatsApp",
      Free: "Unlimited",
      Lite: 'Unlimited',
      Standard: "unlimited",
      Plus: "unlimited"
    },
    {
      key: 5,
      good: "Number of forms",
      Free: "2",
      Lite: '10',
      Standard: "25",
      Plus: "50"
    },
    {
      key: 6,
      good: "Responses in DashBoard",
      Free:'_',
      Lite: <CheckOutlined />,
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 7,
      good: "Custom SEO meta data",
      Free: '_',
      Lite: <CheckOutlined />,
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 8,
      good: "Custom WhatsForm link",
      Free: '_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 9,
      good: "Custom Script & Integrations",
      Free: '_',
      Lite:'_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 10,
      good: "Remove WhatsForm branding",
      Free: '_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 11,
      good: "File upload in form",
      Free:'_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 12,
      good: "Team routing",
      Free: '_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
  ];
  const columns2 = [
    {
      title: '',
      dataIndex: 'good',
      key: 'good',
    },
    {
      title: 'Free',
      dataIndex: 'Free',
      key: 'Free',
    },
    {
      title: 'Lite',
      dataIndex: 'Lite',
      key: 'Lite',
    },
    {
      title: 'Standard',
      dataIndex: 'Standard',
      key: 'standard',
    },
    {
      title: 'Plus',
      dataIndex: 'Plus',
      key: 'Plus',
    },
  ];

  const data2 = [
    {
      key: 1,
      Free: '$0',
      Lite: '$9',
      Standard: '$18',
      Plus: '$36',
    },
    {
      key: 2,
      Free: 'Forever',
      Lite: 'Per Month',
      Standard: "Per Month",
      Plus: 'Per Month',
    },
    {
      key: 3,
      Lite: 'Billed Monthly',
     Standard: "Billed Monthly",
     Plus: "Billed Monthly"
    },
    {
      key: 4,
      good: "Responses via WhatsApp",
      Free: "Unlimited",
      Lite: 'Unlimited',
      Standard: "unlimited",
      Plus: "unlimited"
    },
    {
      key: 5,
      good: "Number of forms",
      Free: "2",
      Lite: '10',
      Standard: "25",
      Plus: "50"
    },
    {
      key: 6,
      good: "Responses in DashBoard",
      Free:'_',
      Lite: <CheckOutlined />,
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 7,
      good: "Custom SEO meta data",
      Free: '_',
      Lite: <CheckOutlined />,
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 8,
      good: "Custom WhatsForm link",
      Free: '_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 9,
      good: "Custom Script & Integrations",
      Free: '_',
      Lite:'_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 10,
      good: "Remove WhatsForm branding",
      Free: '_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 11,
      good: "File upload in form",
      Free:'_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
    {
      key: 12,
      good: "Team routing",
      Free: '_',
      Lite: '_',
      Standard: <CheckOutlined /> ,
      Plus: <CheckOutlined />
    },
  ];
 
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
     
      <Space>
        <Button type={showFirstTable ? "default" : "default"} onClick={toggleFirstTable} style={{fontSize:"24px", outline:"none", border:"none"}}>Pay Monthly</Button>
        <Button type={showSecondTable ? "default" : "default"} onClick={toggleSecondTable} style={{fontSize:"24px", outline:"none", border:"none",  marginLeft:"-15px", marginRight:"-15px"}}>Pay Yearly</Button>
        <div><TbArrowSharpTurnLeft style={{width:"30px", height:"30px", color:"red", marginTop:"-200px"}}/></div>
        <Button style={{backgroundColor:"red", color:"white", borderRadius:"50px", marginLeft:"-15px", marginTop:"10px"}}>3 months Free</Button>
      </Space>
      {showFirstTable && 
        <Table columns={columns1} dataSource={data1} style={{ marginTop: "20px" }} pagination={false} />
      }
      {showSecondTable && 
        <Table columns={columns2} dataSource={data2} style={{ marginTop: "20px" }} pagination={false} />
      }
    </div>
  );
};

export default MyComponent;
