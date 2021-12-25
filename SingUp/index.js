import { Button, Input } from "antd";
import React from "react";
import './singup.css';
import GetAllUsers from '../Services/GetAllUsers';

function SingUp(){
    let firstName='';
    let lastName='';
    let email='';
    let passwordHash='';
    let subscribtion=localStorage.getItem("subscrib");
    return (
        <>
   
        <div class="welcome-area">
         <div className="singup-container">
              <h1 className="singup-title">Sign Up</h1>
              <br></br>
            <table className="singup-table">
                <tr>
                    <td className="singup-table-first-Colum">
                        <label>First Name</label>
                       
                    </td> 
                    <td className="singup-table-secound-Colum">
                        <Input placeholder="first Name" style={{borderRadius:"30px"}} onChange={(event)=>
                        {firstName=event.target.value;}}/>
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td className="singup-table-first-Colum">
                        <label>Last Name</label>
                    </td> 
                    <td className="singup-table-secound-Colum">
                        <Input placeholder="last Name" style={{borderRadius:"30px"}}  onChange={(event)=>
                        {lastName=event.target.value;}} />
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td className="singup-table-first-Colum">
                        <label>Email</label>
                    </td>

                    <td className="singup-table-secound-Colum">
                    <Input placeholder="email" style={{borderRadius:"30px"}} onChange={(event)=>
                        {email=event.target.value;}}/>
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td className="singup-table-first-Colum">
                        <label>Password</label>
                    </td> 
                    <td className="singup-table-secound-Colum">
                        <Input.Password type="text" placeholder="password Hash" style={{borderRadius:"30px"}}   onChange={(event)=>
                        {passwordHash=event.target.value;}}/>
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                   
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td>
                        <Button className="singup-table-button" style={{ background: "cadetblue"}}  type="default" onClick={
                            ()=>{
                                GetAllUsers.signUpUser(firstName,lastName,email,passwordHash,subscribtion).then(
(response)=>{
    console.log(response.data);
}
                                );
                                window.location.href="/login";
                            }
                        }><p>Register</p></Button>
                    </td>
                </tr>

            </table>

         </div>
         </div>
         </>
    );
}


export default SingUp;