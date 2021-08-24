import React from 'react';

import classes from './Post.module.css';

const post = (props) => {
    let theme = null;
    props.theme === true ? theme="Dark":theme="Light"
    return(
        <article className={[classes.Post,classes[theme]].join(" ")}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>

    )
}

export default post;