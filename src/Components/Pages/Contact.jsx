import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Contact.css"
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import { animate, delay, motion } from "framer-motion";
function Contact() {





    const form = useRef();

    const resetForm = () => {
        form.current.reset();
    };

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs
            .sendForm('service_0cs5jtt', 'template_gu4ejhb', form.current, {
                publicKey: 'OI6Tj-xCnq05J0YCY',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your Message Will Be Sand",
                        icon: "success"
                    });
                    setTimeout(resetForm, 500); // Clear the form values after 2 seconds
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                },

            );
    };


    const [Verified, setVerified] = useState(false)
    function onChange(value) {
        // console.log("Captcha value:", value);
        setVerified(true)
    }

    return (
        <div>
            <div id='contact'>
                <section className='Contact-section position-relative'>
                    <div className="shape-top"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="whatido_text text-center">
                                    <h3 className='text-white' data-aos="fade-up" data-aos-delay="0">Contact</h3>
                                    <div class="space_border" data-aos="fade-up" data-aos-delay="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="contact_form">
                                    <div className="contact_form_wrapper">
                                        <form className='form' ref={form} onSubmit={sendEmail}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="field-set"
                                                        data-aos="fade-up" data-aos-delay="200"
                                                        >
                                                        <input type="text" name='to_name' className='form-control' placeholder='Your Name' required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="field-set"
                                                        
                                                      data-aos="fade-up" data-aos-delay="300"
                                                        
                                                    >
                                                        <input type="email" name='from_name' className='form-control' placeholder='Your Email' required />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="text-center">
                                                <div className="field-set"
                                                    
                                                    data-aos="fade-up" data-aos-delay="400"
                                                >
                                                    <textarea name="message" placeholder='Your Message' required className='form-control'></textarea>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center mb-4 bg-transparent" data-aos="fade-up" data-aos-duration="500">
                                                    <ReCAPTCHA
                                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                        onChange={onChange}
                                                    />
                                                </div>
                                                <div
                                                    data-aos="fade-up" data-aos-delay="400"

                                                    className="submit">
                                                    <motion.button
                                                        whileTap={{ scale: 0.9 }}
                                                        whileHover={{
                                                            scale: 1.1
                                                        }}
                                                        transition={{ bounceDamping: 10, bounceStiffness: 600 }}

                                                        type="submit" className='btn-border' disabled={!Verified}>send Message</motion.button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape-bottom"></div>
                </section>
            </div>
        </div>
    )
}

export default Contact
