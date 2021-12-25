import React from "react";
import {Table } from 'react-bootstrap';
import {Button } from 'antd';
import {withRouter} from 'react-router-dom';
import {PlusOutlined,UserSwitchOutlined,LogoutOutlined,DeleteOutlined,FundViewOutlined } from '@ant-design/icons';
import GetAllUsers from '../Services/GetAllUsers';
import './user.css';
class User extends React.Component{


    constructor(props)
    {
  super(props);
    
       this.state ={
                    user: [],
                    disable:''
                   };
        
    this.deleteNameSpace=this.deleteNameSpace.bind(this);
    this.createNameSpace=this.createNameSpace.bind(this);
    }
    deleteNameSpace(id)
    {
        GetAllUsers.deleteNameSpace(id).then(
            (response) =>{
                this.setState({user : this.state.user.id});
            });
    }
    createNameSpace(id){
        GetAllUsers.createNameSpace(id).then(
            ()=>{
                this.setState({user :this.state.user.id})
            }

        );
    }
 
    componentDidMount(){
    GetAllUsers.getUserById().then(
                           (response)=>
                         
                           {  
                                   this.setState(
                                           {
                                                   user:response.data
                                           }
                                   );
                                   if(this.state.user.nameSpace!==null)
                                   {
                                       this.setState(
                                           {
                                               disable:true
                                           }
                                       )
                                   }
                                   else{
                                    this.setState(
                                        {
                                            disable:false
                                        }
                                    )
                                   }
                                   console.log(response.data);
                           }
                   );
           }

        //    handel=(e)=>{
        //     if(this.state.user.nameSpace === null){
        //         this.setState.disaple="true";
        //     }
            
        // }         
viewPodsInfo(){
            this.props.history.push(`/poduserinfo`);
    }
viewportInfo(){
        this.props.history.push(`/urlandport`);
}    
viewServiceInfo(){
        this.props.history.push(`/serviceuserinfo`);
}
// viewNameSpaceCreate(id){
//     this.props.history.push(`/namespace/${id}`);
// }
render(){
   

    return(
    <>
 <div className="site-layout-backgroundUser" style={{ padding: 24, minHeight: 360 }}>
    <p className="title" ><icon id="icon"><UserSwitchOutlined /></icon><span id="title"> User</span></p>
    <p className="title-user"><icon id="icon"><LogoutOutlined/></icon><span id="title" onClick={
               ()=>{
                   localStorage.clear();
                   window.location.href="/login";
               }
           }>Logout</span></p>
        <Button type="primary" id="buttonUser" disabled={this.state.disable} icon={<PlusOutlined/>} style={{ background: "green",color:"aliceblue",borderRadius:"13px"}}onClick ={
                         () =>{(
                                this.createNameSpace(this.state.user.id))
                                window.location.reload();                             
                           }}>Create WordPress App</Button>
       <Table className="table table-bordered">
    <thead>
        <tr>
            <th className="headerApplication">Aplication</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
            
                <tr>
                    <td>{this.state.user.nameSpace}</td>
                    <td>    
                        <Button type="default" icon={<FundViewOutlined />} style={{ background: "#2A2A72",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                            () =>this.viewPodsInfo()
                        } >View pods</Button>  
                         <Button type="default" icon={<FundViewOutlined />} style={{ background: "#1A488E",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                            () =>this.viewServiceInfo()
                        } >View Service</Button> 
                           <Button type="default" icon={<FundViewOutlined />} style={{ background: "#009FFD",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                            () =>this.viewportInfo()
                        } >View port</Button>
                         <Button type="default" icon={<DeleteOutlined />} style={{ background: "red",borderRadius:"8px",color:"aliceblue",marginLeft:"5px"}} onClick ={
                            () =>{this.deleteNameSpace(this.state.user.id)
                                window.location.reload();
                          } } >Delete</Button>  
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
export default withRouter(User);