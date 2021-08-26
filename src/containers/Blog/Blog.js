import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Nav from "../../components/Nav/Nav"
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        darkMode:false,
        selectedPostId:null,
        error:false
    }
    componentDidMount(){
        //get returns a promise
        //will through an error
        // axios.get("https://jsonplaceholder.typicode.com/postssssss")
        axios.get("/posts")
        .then((response)=>{
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map((post)=>{
                return {
                    ...post,
                    author:"Om Dev"
                }
            })
            this.setState({posts:updatedPosts})
            console.log(response)
        })
        .catch((error)=>{
            // console.log(error)
            this.setState({error:true})
        })
    }
    postSelectedHandler(id){
        this.setState({selectedPostId:id})
    }
    render () {
        const ThemeToggleHandler=()=>{
            this.setState((prevState)=>{
                return{darkMode:!prevState.darkMode}
            })
        }
        //error Control
        let posts = <p>Something went Wrong....</p>;
        if(!this.state.error){
            posts= this.state.posts.map((post)=>{
                return <Post
                clicked={()=>this.postSelectedHandler(post.id)}
                key={post.id}
                title={post.title} 
                author={post.author} 
                theme={this.state.darkMode} />
            })
            
        }
        return (
            <div>
                <Nav theme={this.state.darkMode} clickedToggle={ThemeToggleHandler}></Nav>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost
                    id={this.state.selectedPostId}
                    theme={this.state.darkMode}/>
                </section>
                <section>
                    <NewPost theme={this.state.darkMode}/>
                </section>
            </div>
        );
    }
}

export default Blog;