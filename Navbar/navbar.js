import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
render() {
    return (
        <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <Link to="/home" class="logo">
                            <img src="assets/images/WordPressLogo.png" alt="Word Press" />
                        </Link>
                        <ul class="nav">
                            <li><Link to="/home"style={{color: "cadetblue" }}>Home</Link></li>
                            <li><Link to="/features" style={{color: "cadetblue" }}>About</Link></li>
                            <li><Link to="/work-process" style={{color: "cadetblue" }}>Benefits</Link></li>
                           <li><Link to="/login" style={{color: "cadetblue" }}>Login</Link></li>
                            <li><Link to="/register" style={{color: "cadetblue" }}>Sign Up</Link></li>
    
                        </ul>
                         <Link to="/home"class='menu-trigger'>
                            <span>Menu</span>
                        </Link> 
                    </nav>
                </div>
            </div>
        </div>
    </header> 
    );
}
}
export default Navbar;