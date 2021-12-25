import React from "react";
import './about.css';


class About extends React.Component{
render() {
    return (
    <>
        <section class="section padding-top-70 padding-bottom-0" id="features">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <img src="assets/images/222222.png" id="imagee" class="rounded img-fluid d-block mx-auto" alt="App"/>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                        <div class="left-heading">
                            <h2 class="section-title" id="imagee">Install Wordpress without troubles</h2>
                        </div>
                        <div class="left-text">
                            <p>avoid the headache of installing and configuring your favorite CMS ... with us you can have wordpress with a click of your button</p>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="hr"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section padding-bottom-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                        <div class="left-heading">
                            <h2 class="section-title">Pay as you go</h2>
                        </div>
                        <div class="left-text">
                            <p>just pay for the hours you use wordpress and avoid paying big bills for things you dont need</p>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src="assets/images/33333.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
}
export default About ;