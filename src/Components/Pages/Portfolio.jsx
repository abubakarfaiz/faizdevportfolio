import React from 'react'
import "../Styles/Portfolio.css"
import img1 from "/portfolio/5.png"
import img2 from "/portfolio/1.png"
import img3 from "/portfolio/2.png"
import img4 from "/portfolio/3.png"
import img5 from "/portfolio/4.png"
import img6 from "/portfolio/6.png"
function Portfolio() {
    return (
        <div>
            <div id="portfolio" className='portfolio'>
                <div className="container">
                    <div className="whatido_text text-center">
                        <h3 data-aos="fade-up" data-aos-delay="0">Portfolio</h3>
                        <div class="space_border" data-aos="fade-up" data-aos-delay="100"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 imgage" data-aos="flip-left" data-aos-delay="100">
                            <div className="box">
                                <img src={img2} alt="" className='img-fluid' />
                                <div className="img-text">
                                    <div className="content">
                                        <h2>Crypto Currency Website</h2>
                                        <p>I have created this website to improve my skills and I have learned a lot from it.</p>
                                        <a href="https://cryptocurrencyweb-byfaizdev.netlify.app/">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 imgage" data-aos="flip-left" data-aos-delay="200">
                            <div className="box">
                                <img src={img5} alt="" className='img-fluid' />
                                <div className="img-text">
                                    <div className="content">
                                        <h2>Saga GFX & Design</h2>
                                        <p>This portfolio website was developed by a client which is fully responsive and animated.</p>
                                        <a href="https://sagadesign.netlify.app/">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 imgage" data-aos="flip-left" data-aos-delay="300">
                            <div className="box">
                                <img src={img4} alt="" className='img-fluid' />
                                <div className="img-text">
                                    <div className="content">
                                        <h2>Portfolio Website</h2>
                                        <p>This was a personal portfolio website but as the skill improved I also improved my portfolio website.</p>
                                        <a href="https://faizdeveloper.netlify.app/">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 imgage" data-aos="flip-left" data-aos-delay="200">
                            <div className="box">
                                <img src={img6} alt="" className='img-fluid' />
                                <div className="img-text">
                                    <div className="content">
                                        <h2>Responsive Food Website</h2>
                                        <p>This Responsive Food website was created by watching YouTube tutorials and I learned a lot from it and improved my skills.</p>
                                        <a href="https://fooddeliveryweb-byfaizdev.netlify.app/">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 imgage" data-aos="flip-left" data-aos-delay="300">
                            <div className="box">
                                <img src={img3} alt="" className='img-fluid' />
                                <div className="img-text">
                                    <div className="content">
                                        <h2>Business Growth Website</h2>
                                        <p>This business growth website was developed as a challenge and I excelled in it which is fully responsive.</p>
                                        <a href="https://landingpage-first-byfaizdev.netlify.app/">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 imgage" data-aos="flip-left" data-aos-delay="400">
                            <div className="box">
                                <img src={img1} alt="" className='img-fluid' />
                                <div className="img-text">
                                    <div className="content">
                                        <h2>Tutora Responsive website</h2>
                                        <p>This tutora website was developed for a client.</p>
                                        <a href="https://tutoraweb.netlify.app/">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio
