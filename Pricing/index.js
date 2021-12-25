
import React from 'react';
import {Link} from 'react-router-dom';

class Pricing extends React.Component{
    constructor(){
        super();
        this.state = {
            subscriby:[
                {name:''},
                {name:''},
                {name: ''}
            ]
        }
    }
    
render() {
    
    return (
         <>
<section class="section colored" id="Register">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="center-heading">
                    <h2 class="section-title">Subscripy Type </h2>
                </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
                <div class="center-text">
                    <p>Choss the type subscriby for to complete Register.</p>
                </div>
            </div>
        </div>

        <div class="row">
           
            <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div class="pricing-item">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Free</h3>
                    </div>
                    <div class="pricing-body">
                        <div class="price-wrapper">
                            <span class="currency">$</span>
                            <span class="price">0.0</span>
                            <span class="period">monthly</span>
                        </div>
                        <ul class="list">
                            <li class="active">250 --- 1000 MB CPU</li>
                            <li class="active">64 --- 512 MB Memory</li>
                            <li class="active">5 GB Storage</li>
                            <li>15-minute support</li>
                            <li>Unlimited Emails</li>
                            <li>24/7 Security</li>
                        </ul>
                    </div>
                    <div class="pricing-footer">
                        <a href ="/singup" class="main-button" onClick={
                            ()=>{this.name="Free"
                            localStorage.setItem('subscrib',this.name);
                        }}>Purchase Now</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                <div class="pricing-item active">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Standard</h3>
                    </div>
                    <div class="pricing-body">
                        <div class="price-wrapper">
                            <span class="currency">$</span>
                            <span class="price">21.50</span>
                            <span class="period">monthly</span>
                        </div>
                        <ul class="list">
                            <li class="active">1000 --- 1500 GB CPU</li>
                            <li class="active">512 --- 800 MB Memory</li>
                            <li class="active">10 GB Storage</li>
                            <li class="active">15-minute support</li>
                            <li>Unlimited Emails</li>
                            <li>24/7 Security</li>
                        </ul>
                    </div>
                    <div class="pricing-footer">
                        <a href ="/singup" class="main-button"onClick={
                            ()=>{this.name="Premuim"
                            localStorage.setItem('subscrib',this.name);
                        }}>Purchase Now</a>
                    </div>
                </div>
            </div>
          
            <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                <div class="pricing-item">
                    <div class="pricing-header">
                        <h3 class="pricing-title">Premium</h3>
                    </div>
                    <div class="pricing-body">
                        <div class="price-wrapper">
                            <span class="currency">$</span>
                            <span class="price">42.00</span>
                            <span class="period">monthly</span>
                        </div>
                        <ul class="list">
                            <li class="active">1500 --- 2000 MB CPU</li>
                            <li class="active">800 --- 1024 MB Memory</li>
                            <li class="active">15 GB Storage</li>
                            <li class="active">15-minute support</li>
                            <li class="active">Unlimited Emails</li>
                            <li class="active">24/7 Security</li>
                        </ul>
                    </div>
                    <div class="pricing-footer">
                        <Link to ="/singup" class="main-button"onClick={
                            ()=>{this.name="Standard"
                            localStorage.setItem('subscrib',this.name);
                        }}>Purchase Now</Link>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>

         </>
    );
}
} 
export default Pricing;