import React from "react";
import classes from "./Profile.module.css"
import Posts from "./posts/Posts";


export default function Profile(){

    return(
        <div className={classes.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="foto"/>
            </div>
            <div>
                <div>
                    desc
                </div>
            </div>
           <Posts/>
        </div>
    );
}