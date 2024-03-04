import { Button } from "antd";
import { Link } from "react-router-dom";

function RegisterButton(){
    return(
        <div>
        <div>
        <Link to="/register"><Button style={{backgroundColor:"limegreen", color:"white", fontSize:"20px", width:"25%", height:"30%", borderRadius:"20px" }}>Create Whatsapp Form</Button></Link>
        </div>
        <div>
            <p style={{fontSize:"20px", color:"silver"}}>No credit card required. No coding required.</p>
        </div>
        </div>
    )
}
export default RegisterButton;