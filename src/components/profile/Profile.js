import React from "react";
import classes from "./Profile.module.css"
import Posts from "./posts/Posts";


export default function Profile() {

    return (
        <div >
            <div className={classes.proFile}>
                <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469601_nature_gora.jpg" alt=""/>
            </div>
            <div>
                <div>
                    fffff
                </div>
            </div>
            <Posts/>
        </div>
    );
}