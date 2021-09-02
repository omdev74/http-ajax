import React from "react";
import classes from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

const nav=(props)=>{
    let theme = null;
    props.theme === true ? theme="Dark":theme="Light"
    return(
    <header className={[classes.Nav,classes[theme]].join(" ")}>
    <ul className={classes.NavigationItems}>
        <li><ThemeToggle clicked={props.clickedToggle} theme={props.theme}></ThemeToggle></li>
        <li><a href="/" >Home</a></li>
        <li><a href="/new-post" >New Post</a></li>
    </ul>
    </header>
    )
}
export default nav;  