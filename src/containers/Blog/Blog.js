import React, { Component } from 'react';

import { Route,Switch,Redirect } from 'react-router-dom';
// import axios from 'axios';


// import FullPost from './FullPost/FullPost';
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
                {/* <Route path="/"  render={()=><h1>Home</h1>} />
                
                <Route path="/" exact render={()=><h1>Home</h1>} /> */}
                {/* <Route path="/" exact component={Posts } />    */}
                <Switch>
                    
                    <Route 
                    path="/new-post" 
                    exact 
                    component={(props)=><NewPost {...props}theme={this.state.darkMode}/> } />

                    <Route 
                    path="/posts" 
                    // exact 
                    component={(props)=><Posts {...props}theme={this.state.darkMode} />}/>
                    
                    <Redirect from="/" to="/posts"/>
                    {/* <Route path="/posts" component={(props)=><Posts />} /> */}

                
                       
                </Switch>
                
  
                {/* <Posts theme={this.state.darkMode}></Posts> */}
            </div>
        );
    }
}

export default Blog;