import React from "react";
import classes from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"
import { Link } from 'react-router-dom';


const nav=(props)=>{
    let theme = null;
    props.theme === true ? theme="Dark":theme="Light"
    return(
    <header className={[classes.Nav,classes[theme]].join(" ")}>
    <ul className={classes.NavigationItems}>
        <li><ThemeToggle clicked={props.clickedToggle} theme={props.theme}></ThemeToggle></li>
        
        {/* <li><a href="/" >Home</a></li> */}
        <li><Link to="/" >Home</Link></li>
        <li><Link to={{
            pathname:"/new-post",
            hash:"#submit",
            search:"?quick-submit=true"
        }} >New Post</Link></li>
    </ul>
    </header>
    )
}
export default nav;  