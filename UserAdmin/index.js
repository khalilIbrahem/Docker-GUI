import {Button ,Input } from 'antd';
import React,{Component} from 'react';
import {Table } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {UserOutlined,DeleteOutlined,LogoutOutlined, EditOutlined } from '@ant-design/icons';
import { Nav} from 'react-bootstrap';
import GetAllUsers from '../Services/GetAllUsers';
import './useradmin.css';

class UserAdmin extends Component{
  constructor(props)
    {
  super(props);
    
       this.state ={
                    users: [] 
                   }
        
    this.deleteUser=this.deleteUser.bind(this);
    this.changeRole=this.changeRole.bind(this);
    }
  
 
    changeRole(id,role){
    GetAllUsers.changeRole(id,role).then(
        (response) =>{
              
                this.setState(
                        {
                        users : this.state.users.map( user => user.id === id)
                        }
                        
                );
     
         }

     );}
    deleteUser(id)
    {
        GetAllUsers.deleteUser(id).then(
            (response) =>{
                this.setState({users : this.state.users.filter( user => user.id !== id)});
            });
    }
   
componentDidMount(){
        GetAllUsers.getAllUser().then(
                               (response)=>
                             
                               {  
                                       this.setState(
                                               {
                                                       users:response.data
                                               }
                                               
                                       );
                            
                               }
                       );
               }
viewUserInfo(id){
        this.props.history.push(`/userinfo/${id}`);
}

    render() { 
        let role="ADMIN"; 
       
        return (
          <div className="site-layout-backgroundAdmin" style={{ padding: 24, minHeight: 360 }}>
        
           <p className="titleAdmin"><icon id="icon" ><UserOutlined/></icon><span id="title">UserAdmin</span></p>
           <p className="title-logout-admin"><icon id="icon"><LogoutOutlined/></icon><span id="title" onClick={
               ()=>{
                   localStorage.clear();
                   window.location.href="/login";
               }
           }>Logout</span></p>
           <Input placeholder="Search..."  id="searchAdmin" />
           <Button className="buttonMon" style={{ borderRadius:"13px"}}><Nav.Link href={`//192.168.99.100:32000`} target="_blank" > Go To monotring</Nav.Link> </Button>
        
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <Table className="userAdmin-table table-bordered table-striped mb-0 " >
    <thead>
        <tr>
            
            <th className="headerUsersA" scope="col">Users</th>
            <th scope="col">Display Information User</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
        {
           this.state.users.map(
            user =>
            <tr kay = {user.id}>
                <td>{user.firstName}</td>
                <td>
                <Button type="default"  style={{background: "#2A2A72",borderRadius:"8px",color:"aliceblue"}}onClick ={
                        () =>this.viewUserInfo(user.id)
                    }>Display Information</Button> 
                </td>
                <td> 
                     <Button type="default" icon={<EditOutlined />} style={{ background: "#1A488E",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                 () => {this.changeRole(user.id,role)
                    window.location.reload();
                } }>EditRoleUser</Button>
                     <Button type="default" icon={<DeleteOutlined />} style={{ background: "red",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                        () =>this.deleteUser(user.id)
                    } >Delete</Button>  
                </td>
            </tr>
            ) }
    </tbody>
</Table>
</div>
        </div>
        );
    }
}
export default withRouter(UserAdmin);