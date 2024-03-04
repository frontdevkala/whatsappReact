import React from 'react';
import { FcApproval } from "react-icons/fc";

function Third() {
  return (
    <>
      <p style={{fontSize:"20px", textAlign:"center"}}>
        <span style={{ color:"navy", padding: '5px', fontWeight:"bold" }}>
        <FcApproval style={{marginRight:"5px"}}/>30 day money back:
        </span>{' '}
       <span style={{color:"navy"}}>100% satisfied with any paid plan or get a full refund.</span>
      </p>
    </>
  );
}

export default Third;