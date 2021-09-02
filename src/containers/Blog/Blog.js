import React, { Component } from 'react';

import { Route } from 'react-router-dom';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Nav from "../../components/Nav/Nav"
import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
    state={
    darkMode:true   
    }
    
    
    render () {
        
        const ThemeToggleHandler=(event)=>{
            console.log(event.target.checked)
            // event.target.checked
            this.setState((prevState)=>{
                return{darkMode:!prevState.darkMode}
            })
        }

        
        return (
            <div>
                <Nav theme={this.state.darkMode} clickedToggle={ThemeToggleHandler}></Nav>
                {/* <Route path="/"  render={()=><h1>Home</h1>} /> */}
                <Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/" exact render={()=><h1>Home 2</h1>} />

                {/* <Posts theme={this.state.darkMode}></Posts> */}
            </div>
        );
    }
}

export default Blog;