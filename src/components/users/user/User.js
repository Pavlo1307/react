import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function User({item}){





    return(
        <div>
            {item.name} - -
            <Link to={'/users/'+item.id}>user details</Link>
             - -
            <Link to={'/users/'+item.id+'/posts'}>posts</Link>


        </div>
    );
}