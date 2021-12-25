import React  from "react";
import './sidebar.css';
import {sidebarData}  from './sidebarData';
import { Link } from "react-router-dom";

class Sidebar extends React.Component
{

render()
{
    return(
        <>
        <div className="sidebar" >
            <ul className="sidebarlist">
                {sidebarData.map(
                (val,key)=>{
                    return (
                        <Link to={val.route}>
                         <li className="sidebarRow" key={key}>
                             <div className="logoSidebar">{val.image}</div>
                             <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                         </li>
                         </Link>
                            );
                    })
            
                    }               
            </ul>
        </div>

        </>
    )
}

}
export default Sidebar;