import React from "react";

import './middle.css'
import {assets} from '../../../assets/assets'


const Midlle = () => {
    return (
        <div className="mid">

         <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
            </div>   
<div className="content">
    <div className="headere">
        <p>
           <span>Hello, Ally.</span> 
           
        </p>
        <p>How can I help you today</p>
    </div>
    <div className="cards">
    <div className="card">
        <p>Help me understand American football</p>
        <img src={assets.bulb_icon} alt="" />
    </div>

    <div className="card">
        <p>Help me sound like an expert for an upcoming trip</p>
        <img src={assets.bulb_icon} alt="" />
    </div>

    <div className="card">
        <p>Come up with a recipe for an upcoming event</p>
        <img src={assets.code_icon} alt="" />
    </div>

    <div className="card">
        <p>Ideas to surprise a friend on their birthday</p>
        <img src={assets.compass_icon} alt="" />
    </div>
</div>

<div className="main-bottom">

    <div className="search">
      <input type="text" placeholder="Enter a prompt here" />
    

    <img src={assets.gallery_icon} alt="" />
    <img src={assets.mic_icon} alt="" />
    <img src={assets.send_icon} alt="" />
   </div> 
   <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
</div>
</div>
</div>


        
    );
}

export default Midlle