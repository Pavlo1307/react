import React from "react";
import classes from "./Profile.module.css"


export default function Profile(){

    return(
        <div className={classes.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="foto"/>
            </div>
            <div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU"
                         alt="foto1"/>
                </div>
                <div>
                    desc
                </div>
            </div>
            <div>
                POst
                <div>
                    new post
                </div>
            </div>
            <div className='posts'>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    );
}