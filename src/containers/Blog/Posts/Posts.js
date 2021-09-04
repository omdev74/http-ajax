import React,{Component} from "react";
import axios from '../../../axios';
import "./Posts.css"

import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";
export default class Posts extends Component{
    state={
        posts:[],
        selectedPostId:null
    }
    componentDidMount(){
        //get returns a promise
        //will through an error
        // axios.get("https://jsonplaceholder.typicode.com/postssssss")
        console.log(this.props)
        axios.get("/posts")
        .then((response)=>{
            const posts = response.data.slice(0,10)
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
                return (<Link to={"/"+post.id} key={post.id}>
                <Post
                clicked={()=>this.postSelectedHandler(post.id)}
                
                title={post.title} 
                author={post.author} 
                theme={this.props.theme} />
                </Link>)
            })
            
        }
        return (
        <section className="Posts">
        {posts}
        </section>)
    }
}