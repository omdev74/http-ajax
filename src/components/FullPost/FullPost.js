import React, { Component } from 'react';

import classes from'./FullPost.module.css';

class FullPost extends Component {
    
    render () {
    let theme = null;
    this.props.theme === true ? theme="Dark":theme="Light"

        let post = <p>Please select a Post!</p>;
        post = (
            <div className={[classes.FullPost,classes[theme]].join(" ")}>
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className={classes.Delete}>Delete</button>
                </div>
            </div>
        );
        return post;
    }
}

export default FullPost;