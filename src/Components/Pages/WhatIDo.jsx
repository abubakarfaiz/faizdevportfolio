import React from 'react'
import "../Styles/WhatIDo.css"
// import "../../font-awesome.css"
import { FaReact, FaTools } from "react-icons/fa";
import { MdPortrait } from "react-icons/md";
function WhatIDo() {



    return (
        <div>
            <div id='whatido' className='whatido'
            >
                <div className="container"
                >
                    <div className="whatido_text text-center">
                        <h3 data-aos="fade-up" data-aos-delay="0">What I Do</h3>
                        <div data-aos="fade-up" data-aos-delay="100" class="space_border"></div>
                    </div>
                    <div className="row g-0"

                    >
                        <div className="col-12 col-md-6 col-lg-4" 
                        >
                        <div className="whatido_box overflow-hidden"
                        >
                            <div data-aos="fade-right" data-aos-delay="200">
                            <div className="text d-flex align-items-center mb-3">
                                {/* <i class="fa-brands fa-react"></i> */}
                                <FaReact className='fa-brands' />
                                <h4 className='mb-0 ms-3'>Designing</h4>
                            </div>
                            <p>Specializing in <b>WordPress web design</b>, I craft responsive, user-friendly websites that enhance your online presence. With a focus on aesthetics and functionality, I ensure your site stands out and performs seamlessly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4" 
                    >
                        <div className="whatido_box overflow-hidden">
                            <div data-aos="fade-right" data-aos-delay="400">
                            <div className="text d-flex align-items-center mb-3">
                                {/* <i class="fa-solid fa-screwdriver-wrench"></i> */}
                                <FaTools className='fa-brands' />
                                <h4 className='mb-0 ms-3'>Development</h4>
                            </div>
                            <p>Passionate <b>front-end developer</b> specializing in creating visually stunning and highly functional websites. With expertise in HTML, CSS, and JavaScript, I transform ideas into seamless digital experiences tailored to your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4"
                    >
                        <div className="whatido_box overflow-hidden">
                            <div data-aos="fade-right" data-aos-delay="600">
                            <div className="text d-flex align-items-center mb-3">
                                {/* <i class="fa-regular fa-address-card"></i> */}
                                <MdPortrait className='fa-brands' />
                                <h4 className='mb-0 ms-3'>Portfolio </h4>
                            </div>
                            <p>I specialize in creating stunning landing pages and dynamic portfolios that captivate and convert. My designs are tailored to showcase your brand's unique strengths and drive meaningful engagement.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
            </div >
        </div >
    )
}

export default WhatIDo
