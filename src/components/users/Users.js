import User from "./user/User";
import {useState} from "react";

export default function Users({items, userPosts}){

    return(
        <div>
            {

                items.map((value) => <User key={value.id} item={value}  />)

            }


        </div>
    );
}