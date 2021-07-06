import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
export default function Post({item}){


    return(
        <div>

                <br/>
                <div>{item.title}</div>

        </div>
    );
}
