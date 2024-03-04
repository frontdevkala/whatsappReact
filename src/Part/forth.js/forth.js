import React from 'react';
import { Typography } from 'antd';

const { Link: AntdLink } = Typography;

function Forth() {
  return (
    <>
      <AntdLink to="/whatsappWid" style={{ textDecoration: "none", marginRight: "30px", fontSize: "20px", color:"navy" }}>WhatsApp Widget</AntdLink>
      <AntdLink to="/whatsappTeam" style={{ textDecoration: "none", marginRight: "30px", fontSize: "20px", color:"navy" }}>WhatsApp Team</AntdLink>
      <AntdLink to="/whatsappAff" style={{ textDecoration: "none", marginRight: "30px", fontSize: "20px", color:"navy" }}>Join Affiliate Program</AntdLink>
    </>
  );
}

export default Forth;
