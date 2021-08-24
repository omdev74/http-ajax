import React from "react";
import classes from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"

const nav=(props)=>{
    let theme = null;
    props.theme === true ? theme="Dark":theme="Light"
    return(
    <header className={[classes.Nav,classes[theme]].join(" ")}>
    <ThemeToggle clicked={props.clickedToggle}></ThemeToggle>
    </header>
    )
}
export default nav;  