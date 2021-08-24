import React from "react";
const themeToggle=(props)=>(
    <div>
    <input type="checkbox" onClick={props.clicked}></input>
    <label>Dark Mode</label>
    </div>
    
)
export default themeToggle;