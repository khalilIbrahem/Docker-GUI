        
import {Route ,Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './Home/index.js';
import About from './About/index.js';
import Login from './Login/index.js';
import SingUp from './SingUp/index.js';
import Workprocess from './Workprocess/index.js';
import Pricing from './Pricing/index.js';
import UserAdmin from './UserAdmin/index.js';
import UserInfo from './Userinfo/index.js';
import User from './User/index.js';
import Navbar from './Navbar/navbar.js';
import Sidebar from './Sidebar/index.js';
import React from "react";
import Pods from './Pods/index.js';
import Service from './Service/index.js';
import Namespace from './NameSpace/NameSpace.js';
import PodUserInfo from './PodUserInfo/podUserInfo';
import ServiceUserInfo from './ServiceUserInfo/serviceInfo';
import SidebarAdmin from './SidebarAdmin/index.js';
import UrlAndPort from './UrlAndPort/url.js';

function App() {
  return (
  <>
   <Router>
   
        <Switch>
        <Route  path="/features" >
    <Navbar />
            <About/>
          </Route>
          <Route path="/work-process">
          <Navbar />
            <Workprocess/>
          </Route>
          <Route path="/register">
          <Navbar />
            <Pricing/>
          </Route>
          <Route path="/login">
          <Navbar />
            <Login/>
          </Route>
        
          <Route path="/singup">
          <Navbar />
            <SingUp/>
          </Route>
         <Route  path="/homeSidebar" >
        <Sidebar/>
           </Route>
        <Route  path="/user" >
        <Sidebar/> 
     <User/>
           </Route>
           <Route  path="/urlandport" >
     <UrlAndPort/>
           </Route>


           <Route  path="/homeSidebarAdmin" >
        <SidebarAdmin/>
           </Route>
           <Route path="/useradmin">
           <SidebarAdmin/>
             <UserAdmin/>
           </Route>
           <Route path="/pods">
           <SidebarAdmin/>
             <Pods/>
           </Route>
           <Route path="/service">
           <SidebarAdmin/>
             <Service/>
           </Route>
           <Route path="/userinfo/:id">
             <UserInfo/>
           </Route>
           <Route path="/poduserinfo">
             <PodUserInfo/>
           </Route>
           <Route path="/serviceuserinfo">
             <ServiceUserInfo/>
           </Route>
           <Route path="/namespace">
           <SidebarAdmin/>
             <Namespace/>

           </Route>
           <Route path="/" >
            <Navbar />
            <Home/>
            
          </Route>
        </Switch>
    
    </Router> 
</>  
  );
}

export default App;
