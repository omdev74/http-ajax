import React from "react";
const themeToggle=(props)=>(
    <div>
    <input type="checkbox" onChange={props.clicked} checked={props.theme}></input>
    <label>Dark Mode</label>
    </div>
    
) 
export default themeToggle;