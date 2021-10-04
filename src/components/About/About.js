import React from 'react';
import './About.css'

const About = () => {
    return (
       <div>
            <div className="about">
            <div className="about-who">
           <h1>Who we are?</h1>
           <p>
           If you haven’t studied, want to transfer course, or find a September start isn’t ideal, our January intake gives you the chance to commence your studies at a time that works for you.We are one of the only universities in the UK where you can start university in January. We have wholly embraced a January intake, with almost all of our courses (including both undergraduate and postgraduate programmes) available to start in either September or January. That means no matter which entry point you choose, you will be part of a whole new student cohort and get to experience induction, Freshers’ Week and the same expert teaching and personal support facilities.
           </p>
            </div>
            <div className="about-activities">
                <h1>Our Activities</h1>
                <p className="about-activities-para">
                A wide range of student activities are on offer at college, allowing students to explore all areas of their interests and potential. From sports and arts, through to clubs and committees, life at college is all about creating fun and lasting memories.UC has a h3 association with music and the arts. There are plenty of opportunities to perform throughout the year, with students encouraged to get involved in activities.Living at college is an exciting time that gives you the opportunity to meet new people. This contributes to an environment where social activities are never in short supply. 
                </p>
            </div>
        </div>
        <section className="about-teachers">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                       <h1>Our Teachers</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="about-teachers-block">
                            <img src="https://demo.web3canvas.com/themeforest/unisco/images/our-teachers_01.jpg" className="img-fluid teachers-img" alt="" />
                            <div className="teachers-description">
                                <p>
                                    <h3>Melissa Baker</h3>
                                    <br />
                                    MBA, PhD
                                </p>
                                <hr />
                                <p>
                                <strong>Syllabus</strong>  :
                                    <span> Economics, Finance and Marketing</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="about-teachers-block">
                            <img src="https://demo.web3canvas.com/themeforest/unisco/images/our-teachers_04.jpg" className="img-fluid teachers-img" alt="" />
                            <div className="teachers-description">
                                <p>
                                    <h3>Raymond Salazar</h3>
                                    <br />
                                    MPhill, PhD
                                </p>
                                <hr />
                                <p>
                                <strong>Syllabus</strong>  :
                                    <span> Philosophy,History and Literature</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="about-teachers-block">
                            <img src="https://demo.web3canvas.com/themeforest/unisco/images/our-teachers_03.jpg" className="img-fluid teachers-img" alt="" />
                            <div className="teachers-description">
                                <p>
                                    <h3>Jhonson Parker</h3>
                                    <br />
                                    MA, PhD
                                </p>
                                <hr />
                                <p>
                                <strong>Syllabus</strong>  :
                                    <span> English Language and Architecture</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="about-teachers-block">
                            <img src="https://demo.web3canvas.com/themeforest/unisco/images/our-teachers_02.jpg" className="img-fluid teachers-img" alt="" />
                            <div className="teachers-description">
                                <p>
                                    <h3>Rajesh Palit</h3>
                                    <br />
                                    MSC, PhD
                                </p>
                                <hr />
                                <p>
                                    <strong>Syllabus</strong> :
                                    <span> Computer Science, Astronomy and Robotics</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </div>
    );
};

export default About;