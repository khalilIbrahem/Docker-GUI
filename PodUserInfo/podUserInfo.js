import { Table } from "antd";
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import {CodepenOutlined  } from '@ant-design/icons';
import './podUserInfo.css';
import GetAllUsers from '../Services/GetAllUsers';

class PodUserInfo extends React.Component{
  constructor(props)
  {
super(props);
  
     this.state ={
                  pods: []
                 }
                 
                }

  componentDidMount(){
   GetAllUsers.getPodsById().then(
                      (response)=>
                      {
                              this.setState(
                                      {
                                        
                                            pods :response.data
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
          title: 'NameSpace',
          dataIndex: 'nameSpace',
          key: 'nameSpace',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        }, 
       
      ];
    return (
      <div className="site-layout-background-pods" style={{ padding: 24, minHeight: 360 }}>
     
          <Router>

<Navbar bg="dark" variant="dark" className="navbarPodsUser">
    <Navbar.Brand className="titlepods">
       <icon className="icon-pods"><CodepenOutlined />
          </icon>
          PodsInfo</Navbar.Brand>
     <Nav className="mr-auto">
      <Nav.Link href="/user">Back</Nav.Link>
    </Nav>
    
    
  </Navbar>
</Router>
          <Table className="pods-table" scroll={{ y: 320 }} bordered="2px" dataSource={this.state.pods} columns={columns}/>
</div>
    );
}
}
export default PodUserInfo;