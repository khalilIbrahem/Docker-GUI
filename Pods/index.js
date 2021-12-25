import { Input, Table } from "antd";
import React from "react";
import {CodepenOutlined,LogoutOutlined  } from '@ant-design/icons';
import './pods.css';
import GetAllUsers from '../Services/GetAllUsers';

class Pods extends React.Component{
  constructor(props)
  {
super(props);
  
     this.state ={
                  pods: [] ,
                  search:''
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
   GetAllUsers.getAllPods().then(
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
      let filterPods=this.state.pods.filter(
        (pod) => {
            return pod.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;

        }
    )
    return (
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <p className="title-pods">  <icon id="icon"><CodepenOutlined /></icon><span id="title">Pods</span></p>
        <p className="title-logout-pods"><icon id="icon"><LogoutOutlined/></icon><span id="title" onClick={
               ()=>{
                   localStorage.clear();
                   window.location.href="/login";
               }
           }>Logout</span></p>  
           <Input placeholder="Search..."  id="searchPods" value={this.state.search} onChange={this.updateSearch.bind(this)} />
           <Table className="pods-table" scroll={{ y: 320 }} bordered="2px" dataSource={filterPods} columns={columns}/>
</div>
    );
}
}
export default Pods;