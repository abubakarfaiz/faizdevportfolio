import React from "react";
// import  Sun  from "./Sun.svg";
// import Moon from "./Moon.svg"
import "./DarkMode.css";

function DarkMode() {
    const setLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme === "dark"){
        setDarkMode();
    }
    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode();
        else setLightMode()
    }
  return (
    <>
      <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <div className="svg moon">
                <ion-icon name="moon-outline"></ion-icon>
                </div>
                <div className="svg sun">
                <ion-icon name="sunny-outline"></ion-icon>
                </div>
            </label>
        </div>
    </>
  )
}

export default DarkMode
