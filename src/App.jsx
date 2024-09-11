
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import About from "./Components/Pages/About"
import Companies from "./Components/Pages/Companies"
import Contact from "./Components/Pages/Contact"
import Counter from "./Components/Pages/Counter"
import Portfolio from "./Components/Pages/Portfolio"
import QuotesBanner from "./Components/Pages/QuotesBanner"
import Resume from "./Components/Pages/Resume"
import WhatIDo from "./Components/Pages/WhatIDo"
import { motion, useScroll, useSpring } from "framer-motion";

function App() {



  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
     
     <motion.div className="progress-bar" style={{ scaleX }} />
        <Header/>
        <About/>
        <QuotesBanner/>
        <WhatIDo/>
        <Portfolio/>
        <Resume/>
        <Counter/>
        <Companies/>
        <Contact/>
        <Footer/>

    </>
  )
}

export default App
