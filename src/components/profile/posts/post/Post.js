import React from "react";
import classes from "./Post.module.css"

export default function Post(props) {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU"
                alt="foto1"/>
            {props.value}
            <div>like {props.like}</div>


        </div>
    );
}
