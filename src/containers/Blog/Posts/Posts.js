import React,{Component} from "react";
import axios from '../../../axios';
import "./Posts.css"

import Post from "../../../components/Post/Post";
export default class Posts extends Component{
    state={
        posts:[],
        selectedPostId:null
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
            // console.log(response)
        })
        .catch((error)=>{
            console.log(error)
            // this.setState({error:true})
        })
    }
    postSelectedHandler(id){
        this.setState({selectedPostId:id})
        console.log(this.state.selectedPostId)
    }
    render(){
        //error Control
        let posts = <p>Something went Wrong....</p>;
        if(!this.state.error){
            posts= this.state.posts.map((post)=>{
                return <Post
                clicked={()=>this.postSelectedHandler(post.id)}
                key={post.id}
                title={post.title} 
                author={post.author} 
                theme={this.props.theme} />
            })
            
        }
        return (
        <section className="Posts">
        {posts}
        </section>)
    }
}