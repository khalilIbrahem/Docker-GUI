import {Button } from 'antd';
import React,{Component} from 'react';
import {Table } from 'react-bootstrap';
import {DeleteOutlined,ContainerOutlined,LogoutOutlined } from '@ant-design/icons';
import GetAllUsers from '../Services/GetAllUsers';
import './namespace.css';

class NameSpace extends Component{
  constructor(props)
    {
  super(props);
    
       this.state ={
                    users: [],
                    namespace:''
                   }
       this.deleteNameSpace=this.deleteNameSpace.bind(this);
                   }
                   deleteNameSpace(id){
                     GetAllUsers.deleteNameSpace(id).then(
                       ()=>{
                       this.setState({users :this.state.users.filter( user => user.id !== id)});
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
                                       if(this.state.users.nameSpace!==null)
                                       {
                                        this.setState(
                                            {
                                                users :this.state.users.filter( user => user.nameSpace!==null)
                                            }
                                    );
                                       }
                            
                               }
                       );
               }

    render() { 
        return (
          <div className="site-layout-backgroundAdmin" style={{ padding: 24, minHeight: 360 }}>
        
           <p className="title-namespace"><icon id="icon"><ContainerOutlined/></icon><span id="title">Namespaces</span></p>
           <p className="title-logout-namespace"><icon id="icon"><LogoutOutlined/></icon><span id="title" onClick={
               ()=>{
                   localStorage.clear();  
                   window.location.href="/login";
               }
           }>Logout</span></p>
              <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <Table className="table table-bordered table-striped mb-0" >
    <thead>
        <tr>
            
            <th className="headerUsersA" scope="col">Application</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    <tbody>
    {
           this.state.users.map(
            user =>
            <tr kay = {user.id}>
                <td>{user.nameSpace}</td>
                <td> 
                     
                     <Button type="default" icon={<DeleteOutlined />} style={{ background: "red",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                        () =>this.deleteNameSpace(user.id)
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
export default NameSpace;