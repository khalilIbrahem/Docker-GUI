import {Button, Input } from 'antd';
import React from 'react';
import GetAllUsers from '../Services/GetAllUsers';
import './login.css';
class login extends React.Component{
render() {
    let email='';
    let passwordHash='';
    return (
        <div class="welcome-area">
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <table className="login-table">
                <tr>
                    <td className="login-table-first-Colum">
                        <label>Email</label>
                    </td> 
                    <td className="login-table-secound-Colum">
                        <Input type="text" name="email" placeholder="email" style={{borderRadius:"30px"}} onChange={(event)=>{
                   email=event.target.value;
                   console.log(email);
                 }}  />
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td className="login-table-first-Colum">
                        <label>PassWord</label>
                    </td>

                    <td className="login-table-secound-Colum">
                    <Input.Password type="text" name="passwordHash" placeholder="passwordHash" style={{borderRadius:"30px"}} onChange={(event)=>{
                   passwordHash=event.target.value;
                   console.log(passwordHash);
                 }} />
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td>
                        <Button   type="submit"  className="login-table-button" style={{ background: "cadetblue"}} onClick = {
                    
                    ()=>{  
                       
                        GetAllUsers.getToken(email,passwordHash).then((response)=>{
                                console.log(response.data);
                        var tokenWithId=response.data.token;
                        var token=tokenWithId.split("!");
                                localStorage.setItem('access_Token',`Bearer `+token[0]);
                                localStorage.setItem('Id',token[1]);
                                localStorage.setItem('user_Id',token[2])
                             if(localStorage.getItem('user_Id') === '2')
                                {
                                    window.location.href="/user";
                                } else{
                                    window.location.href="/useradmin";
                                }
                                });
                              
                               

                            }
                            
                        
                        
                      
                      //} 
                      }   >Login</Button>
                    </td>
                </tr>
                <tr>
                    <td><br></br></td>
                </tr>
                <tr>
                    <td>
                    <p className="login-prografe">Do not have an account ??
                        <a className="login-span" href="/register">Signup</a> </p>
                    </td>
                </tr>

            </table>
        </div>
        </div>
    );
}
}
export default login;

