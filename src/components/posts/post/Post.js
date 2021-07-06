import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom"
export default function Post({item}){


    return(
        <div>

                <br/>
                {item.title}

        </div>
    );
}
