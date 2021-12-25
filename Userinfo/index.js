import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Table } from 'react-bootstrap';
import {Button } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {BrowserRouter as Router,withRouter} from 'react-router-dom';
import './userinfo.css';
import GetAllUsers from '../Services/GetAllUsers';

class UserInfo extends React.Component{
  constructor(props)
  {
super(props);
  
     this.state ={
       id: this.props.match.params.id,
       user: {}
                 }
                 this.deleteUser=this.deleteUser.bind(this);
                }
  deleteUser(id)
                {
                    GetAllUsers.deleteUser(id).then(
                        (response) =>{
                            this.setState({user : this.state.user.filter( user => user.id !== id)});
                        });
                }
componentDidMount(){
    GetAllUsers.getUserInfoById(this.state.id).then(
      (response) => {
        this.setState({user: response.data});

      }
    );
  }

    render() {

          return (
<>

<div className="body">
<Router>

<Navbar bg="dark" variant="dark" className="nevebarUserInfo">
    <Navbar.Brand className="TitleUserIn">UserInfo</Navbar.Brand>
     <Nav className="mr-auto">
      <Nav.Link href="/userAdmin" >Back</Nav.Link>
    </Nav>
    
    
  </Navbar>
</Router>
<Table className="table table-bordered tableuserinfo">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>NameSpace</th>
            <th>Email</th>
            <th>Role</th>
            <th>Subscribtion</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
            
                <tr>
                    <td>{this.state.user.firstName}</td>
                    <td>{this.state.user.lastName}</td>
                    <td>{this.state.user.nameSpace}</td>
                    <td>{this.state.user.email}</td>
                    <td>{this.state.user.role}</td>
                    <td>{this.state.user.subscribtion}</td>
                    <td>
                        <Button type="default" icon={<DeleteOutlined />} style={{ background: "red",borderRadius:"8px",color:"aliceblue"}} onClick ={
                            () =>this.deleteUser(this.users.id)
                        } >Delete</Button>      
                    </td>
                </tr>

            
        }
    </tbody>
</Table>
</div>

</>
            
        );
    }
}
export default withRouter(UserInfo);