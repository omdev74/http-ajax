import React, { Component } from 'react';
import axios from 'axios';
import classes from'./FullPost.module.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }
    //Will cause an Infinite loop of Requests---------------------------------------
    // componentDidUpdate(){
    //     if(this.props.id){
    //         axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.id)
    //         .then((response)=>{
    //             // console.log(response);
    //             this.setState({loadedPost:response.data})
    //         })
    //     }
        
    // }
    //------------------------------------------------------------------------------

    //this will not
    componentDidMount(){
        console.log("componentDidMount")
        console.log(this.props)
        

            if(this.props.match.params.id){
                if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)){
                console.log(this.state.loadedPost,this.props.match.params.id)
                axios.get("/posts/"+this.props.match.params.id)
                .then((response)=>{
                    console.log("response-------------");
                    console.log(response);
                    this.setState({loadedPost:response.data},()=>console.log("State updated to:"+ this.state.loadedPost.id))
                })}
            }
            
        }
        
        componentDidUpdate(){
            console.log("componentDidUpdate")

        }
        componentWillUnmount(){
            console.log("componentWillUnmount");

        }
        deletePostHandler=()=>{
            axios.delete("/posts/"+this.props.match.params.id)
            .then((response)=>{
                console.log(response);
            })

        }

    
    render () {
    let theme = null;
    this.props.theme === true ? theme="Dark":theme="Light"

        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign:"center"}}>Loading....</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className={[classes.FullPost,classes[theme]].join(" ")}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} 
                        className={classes.Delete}>Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;