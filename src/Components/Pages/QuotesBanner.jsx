import React from 'react'
import "../Styles/QuotesBanner.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import quote from "/quote.svg"
import  Typewriter  from 'typewriter-effect'

function QuotesBanner() {

   
    return (
        <>
            <div className='quotesBanner'>
                <div className="v-center">
                    <div className="container">
                        <div   
                        className="row">
                            <div
                            className="col-md-10 offset-md-1">
                              <div
                              data-aos="flip-up"
                              >
                                  <svg 
                                xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                </svg>
                              </div>
                                <p
                                data-aos="fade-right" data-aos-delay="200"
                                >Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.</p>
                                <p
                                data-aos="fade-up-right" data-aos-delay="200"
                                ><Typewriter
                                        className="typewrite"
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: ["Gary Ryan Blair"]
                                        }}

                                    /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="de-gradient-banner-4"></div>
            </div>
        </>
    )
}

export default QuotesBanner
