import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function Heading() {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Title level={1} style={{ color: "navy", fontSize: "38px", fontWeight:"bold" }}>Collecting responses in WhatsApp is</Title>
      </div>
      <div style={{ marginTop: "-30px" }}>
        <Title level={1}>
          <span style={{ color: "limegreen", fontSize: "38px", marginRight: "10px", fontWeight:"bold"  }}>100% free</span>
          <span style={{ color: "darkblue", fontSize: "38px", fontWeight:"bold"  }}>and </span>
          <span style={{ color: "limegreen", fontSize: "38px", fontWeight:"bold"  }}>without limits</span>
        </Title>
      </div>
    </div>
  );
}

export default Heading;
