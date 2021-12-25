import { Table } from "antd";
import React from "react";
import {CustomerServiceOutlined } from '@ant-design/icons';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import './serviceInfo.css';
import GetAllUsers from '../Services/GetAllUsers';
class ServiceUserInfo extends React.Component{
    constructor(props)
    {
  super(props);
    
       this.state ={
                    Service: []
                   }
                   
                  }
  
    componentDidMount(){
     GetAllUsers.getServiceById().then(
                        (response)=>
                        {
                                this.setState(
                                        {
                                          
                                          Service :response.data
                                        }
                                )
                                console.log(response.data);
                        }
                );
        }
      
  render() {
      const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Port',
            dataIndex: 'port',
            key: 'port',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, 
         
        ];
      return (
        <div className="site-layout-background-service" style={{ padding: 24, minHeight: 360 }}>
         
            <Router>

<Navbar bg="dark" variant="dark" className="navbarServiceUser">
    <Navbar.Brand className="titleService">
      <icon className="iconService">
        <CustomerServiceOutlined />
            </icon>
            UserInfo
            </Navbar.Brand>
     <Nav className="mr-auto">
      <Nav.Link href="/user">Back</Nav.Link>
    </Nav>
    
    
  </Navbar>
</Router>
             <Table className="service-table"  scroll={{ y: 320 }}  bordered="2px" dataSource={this.state.Service} columns={columns}/>
  </div>
      );
  }
}
export default ServiceUserInfo; 