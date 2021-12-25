import React  from "react";
import './sidebar.css';
import { Link } from "react-router-dom";
import { sidebarDataAdmin } from './sidebarDataAdmin';

class SidebarAdmin extends React.Component
{

render()
{
    return(
        <>
        <div className="sidebarAdmin" >
            <ul className="sidebar-list-admin">
                {sidebarDataAdmin.map(
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
export default SidebarAdmin;