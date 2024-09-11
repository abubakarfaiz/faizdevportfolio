
import "../Styles/Resume.css"
function Resume() {
    return (
        <div id='resume'>
            <div className='resume-section'>
                <div className="container">
                    <div className="col-12">
                        <div className="whatido_text text-center">
                            <h3 data-aos="fade-up" data-aos-delay="0">Resume</h3>
                            <div className="space_border" data-aos="fade-up" data-aos-delay="100"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="p-4">
                                <h3 data-aos="fade-right" data-aos-delay="100">Experiences</h3>
                                <ul className='timeline overflow-hidden'>
                                    <li className="timeline-item">
                                        <h4 className='timeline-title'>2024 - now</h4>
                                        <div className="timeline-text">
                                            <span className='timeline-span' data-aos="fade-right" data-aos-delay="200">Full Stack Mern Web Developer</span>
                                            <span className='timeline-company' data-aos="fade-right" data-aos-delay="300">Freelancing</span>
                                            <p data-aos="fade-right" data-aos-delay="350">I am a Full Stack MERN web developer with experience in HTML5, CSS3, JavaScript, React.js, Node.js, and MongoDB. I have been actively freelancing on Fiverr, where I have successfully delivered various web development projects, honing my skills and building client relationships.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <h4 className='timeline-title'>2022 - 2024</h4>
                                        <div className="timeline-text">
                                            <span className='timeline-span'data-aos="fade-right" data-aos-delay="200">Front-End Web Developer</span>
                                            <span className='timeline-company' data-aos="fade-right" data-aos-delay="300">Upwork, Fiverr</span>
                                            <p data-aos="fade-right" data-aos-delay="450">
                                            I specialize in front-end development with expertise in HTML, CSS, JavaScript, React, and frameworks like Bootstrap and Tailwind CSS. I have successfully completed projects on Fiverr and Upwork, where I delivered responsive and user-friendly interfaces for diverse clients.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <h4 className='timeline-title'>2021 - 2022</h4>
                                        <div className="timeline-text">
                                            <span className='timeline-span'data-aos="fade-right" data-aos-delay="300">Graphic Designer</span>
                                            <span className='timeline-company' data-aos="fade-right" data-aos-delay="300">It Skills & Solutions BRW</span>
                                            <p data-aos="fade-right" data-aos-delay="300">
                                            In 2020, I gained experience in basic graphic design, creating visuals like logos and banners. This experience helped me develop a strong eye for design, which complements my web development skills.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="p-4">
                                <h3 data-aos="fade-right" data-aos-delay="100">Education</h3>
                                <ul className='timeline'>
                                    <li className="timeline-item">
                                        <h4 className='timeline-title'>Agu 2023 - now</h4>
                                        <div className="timeline-text">
                                            <span className='timeline-span' data-aos="fade-right" data-aos-delay="200">HSSC (ICS)</span>
                                            <span className='timeline-company' data-aos="fade-right" data-aos-delay="300">Govt. Degree College Brw</span>
                                            <p data-aos="fade-right" data-aos-delay="300">I have been studying Computer Science at Government College Burewala for the past year, where I have deepened my knowledge in programming and web development. This academic experience has further enhanced my technical skills and understanding of the field.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <h4 className='timeline-title'>2021 - 2023</h4>
                                        <div className="timeline-text">
                                            <span className='timeline-span' data-aos="fade-right" data-aos-delay="200">SSC (Computer)</span>
                                            <span className='timeline-company' data-aos="fade-right" data-aos-delay="300">Govt. HSS 477/EB</span>
                                            <p data-aos="fade-right" data-aos-delay="450">
                                            I have been studying Computer Science at Government School for HSS Chak No 477/EB for the past year. This education has provided me with a solid foundation in programming and technology, complementing my practical web development experience.</p>
                                        </div>
                                    </li>
                                    <li className="timeline-item">
                                        <h4 className='timeline-title'>2019 - 2021</h4>
                                        <div className="timeline-text">
                                            <span className='timeline-span' data-aos="fade-right" data-aos-delay="300">Front-End Web Developemnt & GFX</span>
                                            <span className='timeline-company' data-aos="fade-right" data-aos-delay="300">IT Skills & Solution Brw</span>
                                            <p data-aos="fade-right" data-aos-delay="300">
                                            In 2020, I focused on front-end web development, mastering HTML, CSS, and JavaScript to create engaging and responsive websites. I also gained experience in graphic design, creating visual assets like logos and banners, which enhanced my overall design skills.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
