import React, { useState } from "react";

import {assets} from '../../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {

  const [extended, setExended] = useState(false)
    return (
        <div className="Sidebar">
          <div className="top">
              <img onClick={()=>setExended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
              <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
           {extended?<p>New chat</p>:null}
          </div>
          <div className="recent">
            {extended?<p className="recent-title">Recent</p>:null}
          </div>

          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            {extended?<p>what is react....</p>:null}
          </div>
          </div>

          
          <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.compass_icon} alt="" />
              {extended?<p>Activity</p>:null}
            </div>

            <div className="bottom-item recent-entry">
              <img src={assets.setting_icon} alt="" />
              {extended?<p>Settings</p>:null}
            </div>
          </div>
        </div>
    );
}

export default Sidebar