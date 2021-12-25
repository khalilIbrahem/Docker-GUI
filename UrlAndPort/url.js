import { Button, Card } from "antd";
import React from "react";
import { Nav} from 'react-bootstrap';
import GetAllUsers from '../Services/GetAllUsers';
import './urlandport.css';

class UrlAndPort extends React.Component{
  constructor(props)
  {
super(props);
  
     this.state ={
                  users: []
                 }
                 
                }

  componentDidMount(){
   GetAllUsers.getServiceById().then(
     (Response)=> {
       this.setState({users: Response.data});
     }
   );
      }

render() {
   const portWebSite=this.state.users.map(user => user.port)[0];
   console.log(portWebSite);
    return (
      <div className="card">
        <div className="card-style" >
          <p className="title_p">You can access your wordpress instance using this port: </p>
         <Card className="card-title" title="Namespace Information" style={{borderRadius:"13px",color:"black"}}  >
      <p className="card-title1" id="port" >Port :{this.state.users.map(user => user.port).toString().split(",0")}</p>
      <p className="card-title1">IP Adress :<span>192.168.99.100</span></p>
    </Card>
    <p className="title_p">IF you want go to your website faster click this button</p>
    <Button className="buttonGo" style={{ borderRadius:"13px"}}><Nav.Link href={`//192.168.99.100:${portWebSite}`} target="_blank"> Go To Website</Nav.Link> </Button>
    <Button className="button" style={{ borderRadius:"13px"}}><a style={{color:"black"}} href="/user"> back </a> </Button>
    </div>
    </div>
    );
}
}
export default UrlAndPort;