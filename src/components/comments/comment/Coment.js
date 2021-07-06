import {useState} from "react";

export default function Comment({item}){


    return(
        <div>

            <br/>
            {item.id}-{item.email}

        </div>
    );
}
