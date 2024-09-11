import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div>
          <footer>
            <div className="content">
              <div className="text">
                <p>© Copyright 2024 - faizdev by DigiBridge</p>
              </div>
              <div className="icons d-flex align-items-center">
              <a href="#"><i class="bi bi-facebook" ></i></a>
              <a href="https://wa.me/+923286452781"><i class="bi bi-whatsapp" ></i></a>
              <a href="https://www.instagram.com/faizdev742"><i class="bi bi-instagram" ></i></a>
              <a href="#"><i class="bi bi-linkedin" ></i></a>
              <a href="https://github.com/abfaiz742"> <i class="bi bi-github fa_lg"></i></a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
