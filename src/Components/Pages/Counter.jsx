import React, {useState} from 'react'
import "../Styles/Counter.css"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
function Counter() {
    const [CounterState, setCounterState] = useState(false);
    return (
        <div>
            <section className='c-section'>
                <div className="counter-section">
                    <div className="counter-shape-top"></div>
                    <div className="container">
                        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                            <div className="row text-center">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 counter-box1 counter-box"  >
                                    <h1 data-aos="fade-up" data-aos-delay="0">
                                        {
                                            CounterState &&
                                            <CountUp start={0} end={99} duration={3}></CountUp>
                                        }
                                        %</h1>
                                    <p data-aos="fade-up" data-aos-delay="50">Success Rate</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 counter-box2 counter-box">
                                    <h1 data-aos="fade-up" data-aos-delay="200">{CounterState &&
                                        <CountUp start={0} end={200} duration={3.75}></CountUp>
                                    }
                                        +</h1>
                                    <p data-aos="fade-up" data-aos-delay="250">Complete Projects</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 counter-box counter-box">
                                    <h1 data-aos="fade-up" data-aos-delay="400">{
                                        CounterState &&
                                        <CountUp start={0} end={97} duration={2.75}></CountUp>
                                    }
                                        %</h1>
                                    <p data-aos="fade-up" data-aos-delay="450">Satisfied Clients</p>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-3 counter-box">
                                    <h1 data-aos="fade-up" data-aos-delay="600">{
                                        CounterState &&
                                        <CountUp start={0} end={7240} duration={2}></CountUp>
                                    }
                                    </h1>
                                    <p data-aos="fade-up" data-aos-delay="650">Hours of Works</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                    <div className="counter-shape-bottom"></div>
                </div>
            </section>
        </div>
    )
}

export default Counter
