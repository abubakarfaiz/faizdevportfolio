import React from 'react'
import "../Styles/Companies.css"
import digi from "../../../public/companies/Digi.png"
import fiverr from "../../../public/companies/fiverr.png"
import upwork from "../../../public/companies/upwork.png"
import freelance from "../../../public/companies/freelance.png"
import dribbble from "../../../public/companies/dribbble.png"
import designhill from "../../../public/companies/designhill.png"
import guru from "../../../public/companies/guru.png"
import toptal from "../../../public/companies/toptal.png"
import flexjob from "../../../public/companies/flexjobs.svg"
import jobble from "../../../public/companies/jooble.svg"
function Companies() {
  return (
    <div>
      <div className='companies-section'>
        <div className="container">
                <div className="companies ">
                    <div className="item-1 item">
                        <img src={digi} className='img-fluid' alt="" />
                    </div>
                    <div className="item-2 item">
                    <img src={fiverr} className='img-fluid' alt="" />
                    </div>
                    <div className="item-3 item">
                    <img src={upwork} className='img-fluid' alt="" />
                    </div>
                    <div className="item-4 item">
                    <img src={freelance} className='img-fluid' alt="" />
                    </div>
                    <div className="item-5 item">
                    <img src={dribbble} className='img-fluid' alt="" />
                    </div>
                    <div className="item-6 item">
                    <img src={designhill} className='img-fluid' alt="" />
                    </div>
                    <div className="item-7 item">
                    <img src={guru} className='img-fluid' alt="" />
                    </div>
                    <div className="item-8 item">
                    <img src={toptal} className='img-fluid' alt="" />
                    </div>
                    <div className="item-9 item">
                    <img src={flexjob} className='img-fluid' alt="" />
                    </div>
                    <div className="item-10 item">
                    <img src={jobble} className='img-fluid' alt="" />
                    </div>
                    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Companies
