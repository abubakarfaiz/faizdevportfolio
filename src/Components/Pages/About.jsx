import React, { useEffect } from 'react'
import "../Styles/About.css"
import "../../index.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
function About() {
    useEffect(()=>{
        Aos.init({duration: 1000})
    })
    return (
    <>    
        <div className='about_section' id='about'>
            <div className="container">
                <div className="row text-center">
                    <div className="text_content text-center">
                        <div className="col-md-12">
                            <h3 data-aos="fade-up" data-aos-delay="0" >About</h3>
                            <div data-aos="fade-up" data-aos-delay="100" class="space_border"></div>
                        </div>
                        <div className='col-md-8 offset-md-2 px-2 text-center' data-aos-delay="200" data-aos="fade-up"  >
                            <p className='first_p'>
                                I am a <b>Front-end developer</b>, with a strong focus in CSS, JS and React JS. I love to get new experiences and always learn from my surroundings. I've done more than 150 projects. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-12 col-md-6 position-relative" data-aos-delay="250" data-aos="fade-up">
                        <div className="position-relative">
                            <div class="progress blue">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <h4 class="progress-value">100%</h4>
                            </div>
                            <h4>HTML</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6 position-relative" data-aos-delay="300" data-aos="fade-up">
                        <div class="progress yellow">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <h4 class="progress-value">80.5%</h4>
                        </div>
                        <h4>JavaScript</h4>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6 position-relative" data-aos-delay="350" data-aos="fade-up">
                        <div className="position-relative">
                            <div class="progress blue">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <h4 class="progress-value">100%</h4>
                            </div>
                            <h4>CSS</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6 position-relative" data-aos-delay="400" data-aos="fade-up">
                        <div class="progress yellow">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <h4 class="progress-value">80%</h4>
                        </div>
                        <h4>React JS</h4>
                    </div>
                </div>
            </div>
            {/* <div id="de-gradient"></div> */}
        </div>
            <div className="de-gradient-banner-2"></div>
            <div className="de-gradient-banner-3"></div>


        </>
    )
}

export default About
