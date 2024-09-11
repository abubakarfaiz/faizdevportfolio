import React, { useState, useEffect } from 'react'
import "../Styles/Header.css"
import logo from "/FaizDev.png"
import Typewriter from 'typewriter-effect'
// import ParticlesComponent from './ParticlesComponent'
import bar from "/bar-1.png"
import DarkMode from '../DarkMood/DarkMode'
import { motion } from "framer-motion";
function Header() {




    const [nav, setNav] = useState(false);

    // Scroll Navbar
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 10 ? setNav(true) : setNav(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeValueOnScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", changeValueOnScroll);
        };
    }, []);

    const [fixbtn, setfixbrn] = useState(false);

    // Scroll Navbar
    const changeValueOnScrollBtn = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 10 ? setfixbrn(true) : setfixbrn(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeValueOnScrollBtn);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", changeValueOnScrollBtn);
        };
    }, []);




    // --------------------------------------------------
   
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>{
        let handler = () =>{
            setIsOpen(false)
        }
        document.addEventListener("mousedown", handler);
    })

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

//  --------------------Loader
    useEffect(() => {
        const loader = document.getElementById('preloader');
        window.addEventListener('load', () => {
          loader.style.transition = 'opacity 0.5s ease-out';
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500); // match this to the transition duration
        });
      }, []);


    return (
        <>
           <div id="preloader">
           <span id="loader"></span>
           </div>
            <div className='Header_section' id='home' >
                {/* <ParticlesComponent id="particles-js" /> */}
                {/* <div id="particles-js" ></div> */}
                <div id='navbar' className={`${nav === true ? "sticky" : ""}`}>
                    <section className='navbar_section'>
                        <div className="container d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <img src={logo} className='img-fluid' />
                            </div>
                            <div className="nav_menu">
                                <div className="nav_links d-flex align-items-center">
                                    <ul className='d-flex main_menu align-items-center mb-0'>
                                        <a href="#"><li className='active' >Home</li></a>
                                        <a href="#about"><li>About me</li></a>
                                        <a href="#whatido"> <li>What I Do</li></a>
                                        <a href="#portfolio"><li >Portfolio</li></a>
                                        <a href="#resume"><li>My Resume</li></a>
            
                                        <a href="#contact"><li>Contact me</li></a>
                                    </ul>
                                    <a href="" className='active_btn'>
                                        <DarkMode />
                                    </a>
                                    <button className="toggle_btn" onClick={handleToggle} >
                                        <img src={bar} alt="" />
                                        {/* <i className='fa-solid fa-bars'></i> */}
                                    </button>
                                    <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                                        <ul className=''>
                                            <a href="#"><li className='active' >Home</li></a>
                                            <a href="#about"><li>About me</li></a>
                                            <a href="#whatido"> <li>What I Do</li></a>
                                            <a href="#portfolio"><li >Portfolio</li></a>
                                            <a href="#resume"><li>My Resume</li></a>
                            
                                            <a href="#contact"><li>Contact me</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className='banner_section'>
                    <div className="fixed_content">
                        <div className="fixed_icons ">
                            <div className="isons">
                                <a href="https://wa.me/+923286452781">
                                    <i class="bi bi-whatsapp fa_lg"></i>
                                </a>
                                <a href="https://github.com/abfaiz742">
                                    <i class="bi bi-github fa_lg"></i>
                                </a>
                                <a href="https://www.instagram.com/faizdev742">
                                    <i class="bi bi-instagram fa_lg"></i>
                                </a>
                            </div>
                            <span className='fixed_follow'>Follow me</span>
                        </div>
                    </div>
                    <motion.div
                    
                    drag
                    dragConstraints={{
                        top:250,
                        bottom:400,
                        left:-50,
                        right:400
                    }}
                    dragTransition={{bounceDamping : 10, bounceStiffness : 600}}
                    
                    className="container con-2">
                        <div className="row banner_text">
                            <div className="col-md-12 banner_name">
                                <h6 data-aos-delay="0" data-aos="fade-up">I Am Abu Bakar 
                                    Faiz</h6>
                                <div className="spacer-10"></div>
                                <h1 data-aos-delay="200" data-aos="fade-up">
                                    <Typewriter
                                        className="typewrite"
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: ["Programmer", "Freelancer"]

                                        }}

                                    />
                                </h1>
                            </div>
                            <div className="spacer-20"></div>
                            <div className="frontend">
                                <p data-aos-delay="400" data-aos="fade-up">
                                    <Typewriter
                                        className="typewrite"
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: ["React JS", "JavaScript", "Bootstrap", "Tailwind CSS", "CSS & CSS3", "SASS", "HTML & HTML5"]

                                        }}

                                    />
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <div id="de-gradient"></div>
            </div>
            <a href="#">
            <div className={`${fixbtn === true ? "fixet-bottom-icon" : ""}`}>
                <div className="">
                    <i class="bi bi-chevron-up"></i>
                </div>
            </div>
            </a>
        </>
    )
}

export default Header
