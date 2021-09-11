import React, { Component } from 'react';

import { Route,Switch } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';


// import FullPost from './FullPost/FullPost';

import Nav from "../../components/Nav/Nav"
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state={
    darkMode:true,
    auth:true  
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
                {/* <Route path="/"  render={()=><h1>Home</h1>} />
                
                <Route path="/" exact render={()=><h1>Home</h1>} /> */}
                {/* <Route path="/" exact component={Posts } />    */}
                <Switch>
                    {this.state.auth ? <Route 
                    path="/new-post" 
                    exact 
                    component={(props)=><AsyncNewPost {...props}theme={this.state.darkMode}/> } />:null}
                    

                    <Route 
                    path="/posts" 
                    // exact 
                    component={(props)=><Posts {...props}theme={this.state.darkMode} />}/>
                    
                    <Route render={()=><h1>Not Found</h1>} />
                    {/* or
                    <Redirect from="/" to="/posts"/> */}
                    

                </Switch>
                
  
                {/* <Posts theme={this.state.darkMode}></Posts> */}
            </div>
        );
    }
}

export default Blog;