import React, { useState } from "react";
import { Form, Button } from "antd";
import { BsFillChatTextFill } from "react-icons/bs";
import { WhatsAppOutlined } from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    mobile_number: ""
  });

  const handleChange = (value, data) => {
    setValues((prevState) => ({ ...prevState, mobile_number: value }));
  };

  const onFinish = async () => {
    try {
      const response = await axios.post("http://localhost:3030/api/register", values);
      console.log(response.data);
      alert("Registration successful");
      navigate("/");
    } catch (error) {
      console.error("Failed server", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <div style={{ padding: "25px", width: "30%" }}>
        <Form name="basic" onFinish={onFinish}>
          <div style={{ marginBottom: "30px", textAlign: "center" }}>
            <span style={{ fontWeight: "bold", color: "green", fontSize: "32px" }}>
              <BsFillChatTextFill style={{ marginRight: "10px", color: "green" }} />
              WhatsForm
            </span>
          </div>
          <Form.Item
            name="mobile_number"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!"
              }
            ]}
          >
            <PhoneInput
              country={"in"}
              name="mobile_number"
              value={values.mobile_number}
              onChange={handleChange}
              inputStyle={{ height: "40px", width: "100%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%", height: "40px", fontSize: "18px", backgroundColor: "green" }}>
              <WhatsAppOutlined /> Register with WhatsApp
            </Button>
            <p style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>OR</p>
            <Button type="default" htmlType="submit" style={{ width: "100%", height: "40px", fontSize: "18px" }}>
              <FcGoogle style={{ marginRight: "5px", marginBottom: "-3px" }} />Register with Google
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
