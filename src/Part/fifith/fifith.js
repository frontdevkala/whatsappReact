import React from 'react';
import { Link } from 'react-router-dom';

function Fifth() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "darkblue", fontWeight:"inherit" }}>Promote WhatsForm</h1>
      <p style={{ textAlign: "center", marginTop: "-10px", color: "darkblue", fontSize:"20px" }}>Are you a consultant, content creator or an agency? Now you can earn by helping your clients!</p>
      <div style={{ textAlign: "center", fontSize:"20px" }}>
        <Link to="/" style={{ color: "limegreen", textDecoration: "none" }}>Join our Affiliate Plan</Link>
      </div>
    </div>
  );
}

export default Fifth;
