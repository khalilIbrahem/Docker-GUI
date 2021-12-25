//import { Button, Form } from "antd";
import React from "react";
import './home.css';
class Home extends React.Component{
render() {
    return (
        <>
    
<div class="welcome-area" id="welcome">

    <div class="header-text">
        <div class="container">
            <div class="row">
                <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                    <h1 className="title-home"> Welcome To WordPress Hosting </h1>
                    <img  className="imageHome" src="assets/images/wprdpresHomepage11.png" alt=""/>
                   <div className="buttonHome">
                        <a href="/features" class="main-button-slider" style={{ background: "cadetblue"}} >Discover More</a>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</div>
                
                 </>
    );
}
}
export default Home;