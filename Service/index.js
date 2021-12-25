import { Input, Table } from "antd";
import React from "react";
import {CustomerServiceOutlined,LogoutOutlined } from '@ant-design/icons';
import GetAllUsers from '../Services/GetAllUsers';
import './service.css';
class Service extends React.Component{
  constructor(props)
  {
super(props);
  
     this.state ={
                  Services: [] ,
                 search: ''
                 }
                 
                }
           
       
    updateSearch(event){
     this.setState(
           {
                 search: event.target.value.substr(0,20)
              }
                  );
              }  

  componentDidMount(){
   GetAllUsers.getAllService().then(
                      (response)=>
                      {
                              this.setState(
                                      {
                                        
                                        Services :response.data
                                      }
                              )
                              console.log("---------S"+this.state.Services[0].port);
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
      let filterService=this.state.Services.filter(
        (serves) => {
            return serves.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;

        }
    )
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <p className="title-service"><icon id="icon"><CustomerServiceOutlined /></icon><span id="title">Service</span></p>
        <p className="title-logout-service"><icon id="icon"><LogoutOutlined/></icon><span id="title" onClick={
               ()=>{
                   localStorage.clear();
                   window.location.href="/login";
               }
           }>Logout</span></p>
           <Input placeholder="Search..."  id="searchService" value={this.state.search} onChange={this.updateSearch.bind(this)} />
           <Table className="service-table" scroll={{ y: 320 }} bordered="2px" dataSource={filterService} columns={columns}/>
</div>
    );
}
}
export default Service; 