import React from "react";
import classes from "./Nav.module.css"
import ThemeToggle from "./ThemeToggle/ThemeToggle"
import { NavLink } from 'react-router-dom';


const nav=(props)=>{
    let theme = null;
    props.theme === true ? theme="Dark":theme="Light"
    return(
    <header className={[classes.Nav,classes[theme]].join(" ")}>
    <ul className={classes.NavigationItems}>
        <li><ThemeToggle clicked={props.clickedToggle} theme={props.theme}></ThemeToggle></li>

        {/* <li><a href="/" >Home</a></li> */}
        <li><NavLink 
        to="/posts/" 
        exact
        activeClassName="active"
        activeStyle={{color:"red"}}>Posts</NavLink></li>
        <li><NavLink 
        exact 
        to={{
            pathname:"/new-post",
            hash:"#submit",
            search:"?quick-submit=true"
        }}
        activeStyle={{color:"red"}} >New Post</NavLink></li>
    </ul>
    </header>
    )
}
export default nav;  